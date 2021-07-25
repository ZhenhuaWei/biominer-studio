import Handsontable from 'handsontable';

export declare type ColumnType = 'date' | 'numeric' | 'text' | 'dropdown';

export declare type DataType = 'float' | 'int' | 'double' | 'boolean' | 'string';

export declare function GenericValidator(query, callback) {
  callback(true);
};

export declare type Validator = (
  query,
  callback,
) =>
  | void
  | Handsontable.validators.NumericValidator
  | Handsontable.validators.Date
  | GenericValidator;

export declare function genRegexValidator(pattern: string) {
  return (query, callback) => {
    const regex = new RegExp(pattern);
    callback(regex.test(query));
  };
};

export declare function genMinMaxValidator(min: number, max: number) {
  return (query, callback) => {
    if (query < min || query > max || min > max) {
      callback(false);
    }

    callback(true);
  };
};

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
