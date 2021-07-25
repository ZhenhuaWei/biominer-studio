import { memo } from 'react';
import { getLocale } from 'umi';
import React, { useState, useEffect } from 'react';
import { HotTable } from '@handsontable/react';
import { map } from 'lodash';
import Handsontable from 'handsontable';

import { TableData } from '../ImportForm/data';
import {
  ColumnDefinition,
  ColumnSchema,
  ColumnType,
  DataType,
  Validator,
  genMinMaxValidator,
  genRegexValidator,
  GenericValidator,
} from './data';

import './index.less';
import 'handsontable/dist/handsontable.full.min.css';
import 'handsontable/languages/zh-CN';

export type DataTableProps = {
  data?: TableData;
  height?: number | string;
  width?: number | string;
  columns?: ColumnSchema[];
};

const getHeader = (data: TableData) => {
  return Object.keys(data[0]);
};

const convertData = (data: TableData): any[][] | null => {
  if (data.length > 0) {
    const headers = getHeader(data);
    const body = map(data, (item) => {
      const record: any = [];
      headers.forEach((field) => {
        record.push(item[field]);
      });

      return record;
    });

    console.log('Convert Data: ', [headers].concat(body));
    return [headers].concat(body);
  }

  return null;
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

const makeColumns = (columns: ColumnSchema[] | undefined): ColumnDefinition[] => {
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

  return [];
};

const tableSettings = {
  bindRowsWithHeaders: true,
  colHeaders: true,
  rowHeaders: true,
  filters: true,
  minCols: 50,
  minRows: 200,
  data: null,
  manualColumnFreeze: true,
  dropdownMenu: [
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
  const { data, height, width, columns } = props;

  const [tableData, setTableData] = useState<any[][] | null>(null);

  useEffect(() => {
    setTableData(convertData(data || []));
  }, ['data']);

  console.log('DataTable: ', data, tableData, Handsontable.languages.getLanguagesDictionaries());

  return (
    <HotTable
      language={getLocale()}
      className="data-table"
      data={tableData}
      settings={tableSettings}
      colHeaders={true}
      rowHeaders={true}
      height={height}
      width={width}
      columns={makeColumns(columns)}
      licenseKey="non-commercial-and-evaluation"
    />
  );
};

export default memo(DataTable);
