export type LangItem = {
  id: string;
  defaultMessage: string;
};

export interface LangData {
  [key: string]: LangItem;
}

export const langData: LangData = {
  reset: {
    id: 'stat-engine.summary-operations.reset',
    defaultMessage: '重置',
  },
  resetTooltip: {
    id: 'stat-engine.summary-operations.reset-tooltip',
    defaultMessage: '重置数据与参数',
  },
  example: {
    id: 'stat-engine.summary-operations.example',
    defaultMessage: '示例',
  },
  exampleTooltip: {
    id: 'stat-engine.summary-operations.example-tooltip',
    defaultMessage: '加载示例数据',
  },
  import: {
    id: 'stat-engine.summary-operations.import',
    defaultMessage: '导入',
  },
  importTooltip: {
    id: 'stat-engine.summary-operations.import-tooltip',
    defaultMessage: '导入参数文件',
  },
  export: {
    id: 'stat-engine.summary-operations.export',
    defaultMessage: '导出',
  },
  exportTooltip: {
    id: 'stat-engine.summary-operations.export-tooltip',
    defaultMessage: '导出参数',
  },
  loadData: {
    id: 'stat-engine.data-operations.load-data',
    defaultMessage: '加载数据',
  },
};

export default langData;
