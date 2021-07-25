export declare type Bound = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export declare type LangItem = {
  id: string;
  defaultMessage: string;
};

export declare interface LangData {
  [key: string]: LangItem;
}
