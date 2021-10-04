// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';
import { parse } from 'url';

// mock chartListDataSource
const genList = (current: number, pageSize: number) => {
  const chartListDataSource: API.ChartListItem[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    chartListDataSource.push({
      name: 'Correlation Plot',
      version: 'v0.1.0',
      description:
        'It is used to investigate the dependence between multiple variables at the same time and to highlight the most correlated variables in a data table.',
      category: 'Chart',
      home: 'https://github.com/tservice-plugins/corrplot',
      source: 'PGx',
      short_name: 'corrplot',
      icons: [
        {
          src: 'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/biominer/corrplot-logo-144x144.png',
          type: 'image/png',
          sizes: '144x144',
        },
      ],
      author: 'Jingcheng Yang',
      maintainers: ['Jingcheng Yang'],
      tags: ['R', 'Chart'],
      readme: 'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/test.md',
    });
  }
  chartListDataSource.reverse();
  return chartListDataSource;
};

let chartListDataSource = genList(1, 1);

function getCharts(req: Request, res: Response, u: string) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const { current = 1, pageSize = 10 } = req.query;
  const params = parse(realUrl, true).query as unknown as API.PageParams &
    API.ChartListItem & {
      sorter: any;
      filter: any;
    };

  let dataSource = [...chartListDataSource].slice(
    ((current as number) - 1) * (pageSize as number),
    (current as number) * (pageSize as number),
  );
  if (params.sorter) {
    const sorter = JSON.parse(params.sorter);
    dataSource = dataSource.sort((prev, next) => {
      let sortNumber = 0;
      Object.keys(sorter).forEach((key) => {
        if (sorter[key] === 'descend') {
          if (prev[key] - next[key] > 0) {
            sortNumber += -1;
          } else {
            sortNumber += 1;
          }
          return;
        }
        if (prev[key] - next[key] > 0) {
          sortNumber += 1;
        } else {
          sortNumber += -1;
        }
      });
      return sortNumber;
    });
  }
  if (params.filter) {
    const filter = JSON.parse(params.filter as any) as {
      [key: string]: string[];
    };
    if (Object.keys(filter).length > 0) {
      dataSource = dataSource.filter((item) => {
        return Object.keys(filter).some((key) => {
          if (!filter[key]) {
            return true;
          }
          if (filter[key].includes(`${item[key]}`)) {
            return true;
          }
          return false;
        });
      });
    }
  }

  if (params.name) {
    dataSource = dataSource.filter((data) => data?.name?.includes(params.name || ''));
  }
  const result = {
    data: dataSource,
    total: chartListDataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${params.current}`, 10) || 1,
  };

  return res.json(result);
}

export default {
  'GET /api/charts': getCharts,
};
