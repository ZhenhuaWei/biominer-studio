import { ProFormColumnsType } from '@ant-design/pro-form';

export declare type DataItem = {
  name: string;
  state: string;
};

export declare type ReadOnlyData = {
  [key: string]: any[][];
};

export declare type DataKey = {
  annoData?: string;
  data: string;
};

export declare type Example = {
  title: string;
  key: string;
  data: [];
  arguments: {
    [key: string]: any;
  };
};

export declare type Icon = {
  // type: 'image/png', sizes: '192x192'
  src: string;
  type: string;
  sizes: string;
};

export declare type ChartMetaData = {
  id: string;
  name: string;
  version: string;
  description: string;
  category: string;
  home: string;
  source: string;
  short_name: string;
  icons: Icon[];
  author: string;
  maintainer: string;
  tags: string[];
  readme: string;
};

export declare type ChartData = {
  fields: ProFormColumnsType<DataItem>[];
  dataKey: DataKey;
  examples: Example[];
};

export declare type ChartResult = {
  results: string[];
  charts: string[];
  taskId: string;
  log: string;
};
