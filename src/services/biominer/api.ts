// @ts-ignore
/* eslint-disable */
import { extend } from 'umi-request';
import { API } from './typings';

const request = extend({
  prefix: 'http://127.0.0.1:8089',
  timeout: 3000,
  credentials: 'same-origin', // 默认请求是否带上cookie
});

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<{
    data: API.CurrentUser;
  }>('/api/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/login/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取Plotly Data for Chart GET /api/figure */
export async function getPlotlyData(id: string, params: {}, options?: { [key: string]: any }) {
  return request<API.PlotlyChart>(`/api/figure/${id}`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取Plotly Raw Data for Chart GET /api/data */
export async function getDataResults(id: string, params: {}, options?: { [key: string]: any }) {
  return request<API.DataResults>(`/api/data/${id}`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取Chart Schema GET /api/chart/<plugin_name>-ui-schema */
export async function getChartSchema(chartName: string, options?: { [key: string]: any }) {
  return request<API.ChartSchema>(`/api/chart/${chartName}-ui-schema`, {
    method: 'GET',
    params: {},
    ...(options || {}),
  });
}

export async function getChart(chartName: string, options?: { [key: string]: any }) {
  return request<API.ChartList>(`/api/chart/${chartName}`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取Chart列表 GET /api/charts */
export async function getCharts(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.ChartList>('/api/manifest', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/tasks */
export async function getTasks(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
    plugin_type?: string;
    plugin_name?: string;
    status?: string;
  },
  options?: { [key: string]: any },
) {
  let newParams = {};
  for (const item of ['plugin_name', 'status']) {
    if (params[item]) {
      newParams[item] = params[item];
    }
  }

  newParams['page'] = params.current;
  newParams['page_size'] = params.pageSize;
  newParams['plugin_type'] = 'ChartPlugin';

  return request<API.TaskList>('/api/tasks', {
    method: 'GET',
    params: {
      ...newParams,
    },
    ...(options || {}),
  });
}
