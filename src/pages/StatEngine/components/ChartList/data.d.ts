import { ProFormColumnsType } from '@ant-design/pro-form';

export declare type DataItem = {
  name: string;
  state: string;
};

export declare type ReadOnlyData = {
  [key: string]: any[][];
};

export declare type DataKey = {
  title: string;
  key: string;
  data: Object[];
};

export declare type Example = {
  title: string;
  key: string;
  data: [];
  arguments: {
    [key: string]: any;
  };
};

export declare type ChartData = {
  id: string;
  title: string;
  maintainer: string;
  description: string;
  logo: string;
  version: string;
  readme: string;
  tags: string[];
  fields: ProFormColumnsType<DataItem>[];
  dataKeys: DataKey[];
  examples: Example[];
};
