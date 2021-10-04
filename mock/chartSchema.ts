// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';
import { parse } from 'url';

// mock chartListDataSource
const chartSchema = {
  schema: {
    fields: [
      {
        key: 'datafile',
        dataIndex: 'datafile',
        valueType: 'select',
        title: 'Data File',
        tooltip: 'Where is the data?',
        valueEnum: '#{{{toselect datafile }}}#',
        formItemProps: {
          rules: [
            {
              required: true,
              message: 'Please load file firstly.',
            },
          ],
        },
      },
      {
        key: 'corr_vars',
        dataIndex: 'corr_vars',
        valueType: 'select',
        title: 'Correlation Variables',
        tooltip: 'Which variables do you want to analyze?',
        valueEnum: '#{{{toselect columns }}}#',
        fieldProps: {
          mode: 'multiple',
        },
        formItemProps: {
          rules: [
            {
              required: true,
              message: 'Please select several variables.',
            },
          ],
        },
      },
      {
        key: 'method',
        dataIndex: 'method',
        valueType: 'select',
        title: 'Method',
        tooltip:
          'The visualization method of correlation matrix to be used. Allowed values are square (default), circle.',
        valueEnum: {
          square: {
            text: 'Square',
          },
          circle: {
            text: 'Circle',
          },
        },
        formItemProps: {
          initialValue: 'square',
        },
      },
      {
        key: 'corr_type',
        dataIndex: 'corr_type',
        valueType: 'select',
        title: 'Correlation Type',
        tooltip: 'full (default), lower or upper display.',
        valueEnum: {
          full: {
            text: 'Full',
          },
          lower: {
            text: 'Lower',
          },
          upper: {
            text: 'Upper',
          },
        },
        formItemProps: {
          initialValue: 'full',
        },
      },
      {
        key: 'hc_method',
        dataIndex: 'hc_method',
        valueType: 'select',
        title: 'Cluster Method',
        tooltip: 'The agglomeration method to be used in hclust (see ?hclust).',
        valueEnum: {
          'ward.D': {
            text: 'ward.D',
          },
          'ward.D2': {
            text: 'ward.D2',
          },
          single: {
            text: 'single',
          },
          complete: {
            text: 'complete',
          },
          average: {
            text: 'average',
          },
          mcquitty: {
            text: 'mcquitty',
          },
          median: {
            text: 'median',
          },
          centroid: {
            text: 'centroid',
          },
        },
        formItemProps: {
          initialValue: 'complete',
        },
      },
      {
        key: 'hc_order',
        dataIndex: 'hc_order',
        valueType: 'switch',
        title: 'Cluster Ordered',
        tooltip:
          'Logical value. If TRUE, correlation matrix will be hc.ordered using hclust function.',
        formItemProps: {
          initialValue: true,
        },
      },
      {
        key: 'sig_level',
        dataIndex: 'sig_level',
        valueType: 'digit',
        title: 'Significant Level',
        tooltip: 'Significant level, greater than 0 and less than 1.',
        fieldProps: {
          step: 0.01,
        },
        formItemProps: {
          initialValue: 0.05,
        },
      },
    ],
    dataKey: {
      data: 'Data',
    },
    examples: [
      {
        title: 'Example 1',
        key: 'example-1',
        datafile: '',
        arguments: {
          corr_vars: ['mpg', 'cyl', 'disp', 'hp', 'drat', 'wt', 'qsec', 'vs', 'am', 'gear', 'carb'],
          sig_level: 0.05,
          hc_order: true,
          hc_method: 'complete',
          corr_type: 'full',
          method: 'square',
        },
      },
    ],
  },
};

function getChartSchema(req: Request, res: Response, u: string) {
  return res.json(chartSchema);
}

export default {
  'GET /api/chart/corrplot': getChartSchema,
};
