export declare type DataItem = {
  name: string;
  state: string;
};

export declare type LangItem = {
  id: string;
  defaultMessage: string;
};

export declare interface LangData {
  [key: string]: LangItem;
}
