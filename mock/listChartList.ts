// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';
import { parse } from 'url';

// mock chartListDataSource
const genList = (current: number, pageSize: number) => {
  const chartListDataSource: API.ChartListItem[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i;
    chartListDataSource.push({
      id: `${index}`,
      title: 'Line Regression',
      maintainer: 'Jingcheng Yang',
      description:
        'Linear regression is a regression method for linear modeling of the relationship between independent variables and dependent variables.',
      logo: 'https://s1.imagehub.cc/images/2020/08/31/82-JCQ9Fx-tuya.jpg',
      version: 'v0.1.0',
      readme: 'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/test.md',
      tags: ['R', 'Chart'],
      fields: [
        {
          title: '标题',
          dataIndex: 'title',
          formItemProps: {
            rules: [{ required: true, message: '此项为必填项' }],
          },
        },
        {
          title: '状态',
          dataIndex: 'state',
          valueType: 'select',
        },
        { title: '标签', dataIndex: 'labels' },
        {
          title: '创建时间',
          key: 'showTime',
          dataIndex: 'createName',
          valueType: 'date',
        },
        { title: '创建时间', dataIndex: 'created_at', valueType: 'dateRange' },
      ],
      dataKey: {
        annoData: 'Anno Data',
        data: 'Data',
      },
      examples: [
        {
          title: '',
          key: '',
          data: [],
          arguments: {},
        },
      ],
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
