// @ts-ignore
/* eslint-disable */
import { ChartMetaData } from '../../pages/StatEngine/components/ChartList/data';
import { PlotlyChart, DataResults } from '../../pages/StatEngine/components/PlotlyViewer/data';

export declare namespace API {
  export type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  export type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  export type PageParams = {
    current?: number;
    pageSize?: number;
  };

  export type TaskListItem = {
    id: string;
    name: string;
    plugin_name: string;
    plugin_type: string;
    percentage: number;
    status: string;
    started_time: string;
    plugin_version: string;
    owner?: string;
    payload?: object;
    finished_time: string;
    description: string;
    response: {
      charts: array;
      results: array;
      response_type: string;
      task_id: string;
      log: string;
    };
  };

  export type TaskList = {
    total?: number;
    current?: number;
    pageSize?: number;
    data?: TaskListItem;
  };

  export type ChartList = {
    data?: ChartMetaData[];
    total?: number;
    success?: boolean;
  };

  export type ChartListItem = ChartMetaData;

  export type ChartSchema = {
    schema: {
      fields: any[];
      examples: any[];
      dataKey: {
        annoData?: string;
        data: string;
      };
    };
  };

  export type PlotlyChart = PlotlyChart;
  export type DataResults = DataResults;

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
