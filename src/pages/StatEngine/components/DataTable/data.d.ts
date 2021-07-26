import Handsontable from 'handsontable';

export declare type ColumnType = 'date' | 'numeric' | 'text' | 'dropdown';

export declare type DataType = 'float' | 'int' | 'double' | 'boolean' | 'string';

export declare type Validator = (
  query,
  callback,
) =>
  | void
  | Handsontable.validators.NumericValidator
  | Handsontable.validators.Date
  | GenericValidator;

export declare type ColumnDefinition = {
  data: string;
  type: ColumnType;
  source: string[] | undefined;
  validator: Validator;
  allowEmpty: boolean;
};

export declare type ColumnSchema = {
  name: string;
  type: DataType;
  choices?: string[];
  min?: number;
  max?: number;
  allowEmpty: boolean;
  validator?: 'minMax' | 'regex';
  pattern?: string;
};
