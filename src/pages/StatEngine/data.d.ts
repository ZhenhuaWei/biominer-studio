export type DataKey = {
  title: String;
  key: String;
  data: Object[];
};

export type FieldItem = {};

export type Example = {
  title: String;
  key: String;
  data: [];
  arguments: Object;
};

export type ChartData = {
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
