import { memo } from 'react';
import { getLocale } from 'umi';
import React, { useState } from 'react';
import { HotTable } from '@handsontable/react';
import { map, isEqual } from 'lodash';

import { TableData } from '../ImportForm/data';
import { ColumnDefinition, ColumnSchema, ColumnType, DataType, Validator } from './data';

import './index.less';
import 'handsontable/dist/handsontable.full.min.css';
import 'handsontable/languages/zh-CN';

export type DataTableProps = {
  dataKey: string;
  data?: TableData;
  columns?: ColumnSchema[];
  height?: number | string;
  width?: number | string;
  updateData?: (dataKey: string, data: any[][], headers: string[]) => void;
};

const GenericValidator = (query: any, callback: any) => {
  callback(true);
};

const genRegexValidator = (pattern: string) => {
  return (query: any, callback: any) => {
    const regex = new RegExp(pattern);
    callback(regex.test(query));
  };
};

const genMinMaxValidator = (min: number, max: number) => {
  return (query: any, callback: any) => {
    if (query < min || query > max || min > max) {
      callback(false);
    }

    callback(true);
  };
};

const getHeader = (data: TableData): string[] => {
  if (data.length > 0) {
    return Object.keys(data[0]);
  }

  return [];
};

const convertData = (data: TableData): any[][] | undefined => {
  if (data.length > 0) {
    const headers = getHeader(data);
    const body = map(data, (item) => {
      const record: any = [];
      headers.forEach((field) => {
        record.push(item[field]);
      });

      return record;
    });

    return body;
  }

  return undefined;
};

const convertType = (dataType: DataType): ColumnType => {
  if (['float', 'int', 'double'].includes(dataType)) {
    return 'numeric';
  }

  if (dataType === 'boolean') {
    return 'dropdown';
  }

  return 'text';
};

const getValidator = (column: ColumnSchema): Validator => {
  if (column.validator === 'minMax' && column.min && column.max) {
    return genMinMaxValidator(column.min, column.max);
  }

  if (column.validator === 'regex' && column.pattern) {
    return genRegexValidator(column.pattern);
  }

  return GenericValidator;
};

const makeColumns = (columns: ColumnSchema[] | undefined): ColumnDefinition[] | undefined => {
  if (columns) {
    const columnDefs: ColumnDefinition[] = [];
    columns.forEach((column) => {
      columnDefs.push({
        data: column.name,
        type: convertType(column.type),
        source: column.choices,
        validator: getValidator(column),
        allowEmpty: false,
      });
    });
    return columnDefs;
  }

  return undefined;
};

const tableSettings = {
  bindRowsWithHeaders: true,
  colHeaders: true,
  rowHeaders: true,
  filters: true,
  className: 'htCenter',
  minSpareRows: 30,
  minSpareCols: 10,
  data: null,
  manualColumnFreeze: true,
  dropdownMenu: [
    'col_left',
    '---------',
    'col_right',
    '---------',
    'undo',
    '---------',
    'redo',
    '---------',
    'make_read_only',
    '---------',
    'clear_column',
    '---------',
    'alignment',
    '---------',
    'filter_by_condition',
    'filter_operators',
    'filter_by_condition2',
    'filter_by_value',
    'filter_action_bar',
  ],
  autoRowSize: true,
  autoColSize: true,
  stretchH: 'all',
  height: '100%',
  width: '100%',
  manualColumnResize: true,
  multiColumnSorting: true,
  undo: true,
  redo: true,
  contextMenu: {
    items: {
      make_read_only: {},
      redo: {},
      undo: {},
      row_below: {},
      row_above: {},
      freeze_column: {},
      unfreeze_column: {},
    },
  },
};

const DataTable: React.FC<DataTableProps> = (props) => {
  const { dataKey, data, height, width, columns, updateData } = props;

  // const [tableData, setTableData] = useState<any[][] | undefined>(undefined);
  // const [tableHeader, setTableHeader] = useState<string[]>([]);
  const [ref, setRef] = useState<HotTable>();

  // useEffect(() => {
  //   setTableHeader(getHeader(data || []));
  //   setTableData(convertData(data || []));
  // }, ['data']);

  console.log('DataTable: ', data, makeColumns(columns));

  return (
    <HotTable
      ref={(tableRef: HotTable) => {
        setRef(tableRef);
      }}
      language={getLocale()}
      className="data-table"
      data={convertData(data || [])}
      settings={tableSettings}
      colHeaders={getHeader(data || []) || true}
      rowHeaders={true}
      height={height}
      width={width}
      columns={makeColumns(columns)}
      afterChange={(changes) => {
        console.log('HotTable: ', changes, ref?.hotInstance.getData());
        if (updateData && ref?.hotInstance.getData()) {
          updateData(dataKey, ref?.hotInstance.getData(), getHeader(data || []));
        }
      }}
      licenseKey="non-commercial-and-evaluation"
    />
  );
};

export default memo(DataTable, isEqual);
