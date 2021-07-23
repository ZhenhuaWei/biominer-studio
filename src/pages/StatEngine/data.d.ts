export declare type DataKey = {
  title: String;
  key: String;
  data: Object[];
};

export declare type FieldItem = {};

export declare type Example = {
  title: String;
  key: String;
  data: [];
  arguments: Object;
};

export declare type ChartData = {
  title: String;
  maintainer: String;
  description: String;
  logo: String;
  version: String;
  readme: String;
  tags: String[];
  fields: FieldItem[];
  dataKeys: DataKey[];
  examples: Example[];
};
