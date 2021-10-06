// eslint-disable-next-line import/no-extraneous-dependencies
import pages from '@/locales/en-US/pages';
import { Request, Response } from 'express';
import { parse } from 'url';

// mock taskListDataSource
const genList = (current: number, pageSize: number) => {
  const taskListDataSource: API.TaskListItem[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    taskListDataSource.push({
      response: {
        log: '/726338b0-24f7-11ec-b2cc-bd78a9e545f7/log',
        results: ['/726338b0-24f7-11ec-b2cc-bd78a9e545f7/result.md'],
        charts: ['/726338b0-24f7-11ec-b2cc-bd78a9e545f7/plotly.json'],
        response_type: 'data2charts',
        task_id: null,
      },
      description: 'Make a correlation plot.',
      finished_time: 1633340576431,
      plugin_name: 'corrplot',
      payload: {
        hc_order: true,
        corr_type: 'full',
        datafile: '/Users/choppy/Downloads/tservice/iris.csv',
        method: 'square',
        hc_method: 'complete',
        corr_vars: ['SepalLength', 'SepalWidth', 'PetalLength', 'PetalWidth'],
        owner: null,
        'plugin-env': {
          'plugin-name': 'corrplot',
          'plugin-version': 'v0.1.0',
          'plugin-info': {
            info: {
              author: 'Jingcheng Yang',
              tags: ['R', 'Chart'],
              maintainers: ['Jingcheng Yang'],
              icons: [
                {
                  src: 'https://store-images.s-microsoft.com/image/apps.30079.0034b9fb-e1fa-4c69-b5b7-de0750ba3098.c645c7e3-2d23-4418-9288-0bd1322b1070.9112ecd7-1c16-4a37-ab49-a5b2c2b61542.png',
                  type: 'image/png',
                  sizes: '192x192',
                },
              ],
              name: 'Correlation Plot',
              source: 'PGx',
              home: 'https://github.com/tservice-plugins/corrplot',
              version: 'v0.1.0',
              short_name: 'corrplot',
              category: 'Chart',
              readme: 'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/test.md',
              description:
                'It is used to investigate the dependence between multiple variables at the same time and to highlight the most correlated variables in a data table.',
            },
            plugin: {
              name: 'corrplot',
              'display-name': 'Correlation Plot',
              'lazy-load': false,
            },
            init: [
              {
                step: 'unpack-env',
                envname: 'corrplot',
                envtype: 'environment',
                'post-unpack-cmd': 'chmod a+x {{ ENV_DEST_DIR }}/bin/corrplot.sh',
              },
              {
                step: 'unpack-env',
                envname: 'templates',
                envtype: 'configuration',
              },
              {
                step: 'unpack-env',
                envname: 'examples',
                envtype: 'data',
              },
              {
                step: 'load-namespace',
                namespace: 'tservice.plugins.corrplot',
              },
              {
                step: 'register-plugin',
                entrypoint: 'tservice.plugins.corrplot/metadata',
              },
              {
                step: 'init-event',
                entrypoint: 'tservice.plugins.corrplot/events-init',
              },
            ],
          },
          'data-dir': '/Users/choppy/Downloads/tservice/plugin-jars/data/corrplot',
          'env-dir': '/Users/choppy/Downloads/tservice/plugin-jars/envs/corrplot',
          'jar-path': '/Users/choppy/Downloads/tservice/plugin-jars/corrplot.tservice-plugin.jar',
          'config-dir': '/Users/choppy/Downloads/tservice/plugin-jars/configs/corrplot',
          'plugin-type': 'ChartPlugin',
        },
      },
      name: 'corrplot2021-10-04 17:42:53',
      plugin_type: 'ChartPlugin',
      percentage: 100,
      status: 'Finished',
      id: i,
      started_time: 1633340573650,
      plugin_version: 'v0.1.0',
      owner: null,
    });
  }
  taskListDataSource.reverse();
  return taskListDataSource;
};

let taskListDataSource = genList(1, 10);

function getTasks(req: Request, res: Response, u: string) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const { current = 1, pageSize = 10 } = req.query;
  const params = parse(realUrl, true).query as unknown as API.PageParams &
    API.TaskListItem & {
      sorter: any;
      filter: any;
    };

  let dataSource = [...taskListDataSource].slice(
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

  if (params.plugin_name) {
    dataSource = dataSource.filter((data) => data?.plugin_name?.includes(params.plugin_name || ''));
  }
  const result = {
    data: dataSource,
    total: taskListDataSource.length,
    page_size: pageSize,
    page: parseInt(`${params.current}`, 10) || 1,
  };

  return res.json(result);
}

export default {
  'GET /api/tasks': getTasks,
};
