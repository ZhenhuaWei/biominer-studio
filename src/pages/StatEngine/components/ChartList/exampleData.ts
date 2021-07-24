export default [
  {
    id: 'bbb43b52-9367-4bf1-b1ed-6861b8aa4e5e',
    title: 'Line Regression',
    maintainer: 'Jingcheng Yang',
    description:
      'Linear regression is a regression method for linear modeling of the relationship between independent variables and dependent variables.',
    logo: 'https://s1.imagehub.cc/images/2020/08/31/82-JCQ9Fx-tuya.jpg',
    version: 'v0.1.0',
    readme: 'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/test.md',
    tags: ['R', 'Chart'],
    fields: [
      {
        title: '标题',
        dataIndex: 'title',
        formItemProps: {
          rules: [{ required: true, message: '此项为必填项' }],
        },
        width: 'm',
      },
      {
        title: '状态',
        dataIndex: 'state',
        valueType: 'select',
        width: 'm',
      },
      { title: '标签', dataIndex: 'labels', width: 'm' },
      {
        title: '创建时间',
        key: 'showTime',
        dataIndex: 'createName',
        valueType: 'date',
      },
      {
        title: '分组',
        valueType: 'group',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            width: 'md',
            dataIndex: 'groupTitle',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
          },
        ],
      },
      {
        title: '列表',
        valueType: 'formList',
        dataIndex: 'list',
        initialValue: [{ state: 'all', title: '标题' }],
        columns: [
          {
            valueType: 'group',
            columns: [
              {
                title: '状态',
                dataIndex: 'state',
                valueType: 'select',
                width: 'xs',
              },
              {
                title: '标题',
                dataIndex: 'title',
                formItemProps: {
                  rules: [{ required: true, message: '此项为必填项' }],
                },
                width: 'm',
              },
            ],
          },
        ],
      },
      {
        title: 'FormSet',
        valueType: 'formSet',
        dataIndex: 'formSet',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            dataIndex: 'groupTitle',
            tip: '标题过长会自动收缩',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
            width: 'm',
          },
        ],
      },
      { title: '创建时间', dataIndex: 'created_at', valueType: 'dateRange' },
    ],
    dataKeys: [
      {
        title: 'Data',
        key: '',
        data: [],
      },
      {
        title: 'Sample Data',
        key: '',
        data: [],
      },
    ],
    examples: [
      {
        title: '',
        key: '',
        data: [],
        arguments: {},
      },
    ],
  },
  {
    id: 'bbb43b52-9367-4bf1-b1ed-6861b8aa4e6e',
    title: 'Line Regression',
    maintainer: 'Jingcheng Yang',
    description:
      'Linear regression is a regression method for linear modeling of the relationship between independent variables and dependent variables.',
    logo: 'https://s1.imagehub.cc/images/2020/08/31/82-JCQ9Fx-tuya.jpg',
    version: 'v0.1.0',
    readme: 'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/test.md',
    tags: ['R', 'Chart'],
    fields: [
      {
        title: '标题',
        dataIndex: 'title',
        formItemProps: {
          rules: [{ required: true, message: '此项为必填项' }],
        },
        width: 'm',
      },
      {
        title: '状态',
        dataIndex: 'state',
        valueType: 'select',
        width: 'm',
      },
      { title: '标签', dataIndex: 'labels', width: 'm' },
      {
        title: '创建时间',
        key: 'showTime',
        dataIndex: 'createName',
        valueType: 'date',
      },
      {
        title: '分组',
        valueType: 'group',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            width: 'md',
            dataIndex: 'groupTitle',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
          },
        ],
      },
      {
        title: '列表',
        valueType: 'formList',
        dataIndex: 'list',
        initialValue: [{ state: 'all', title: '标题' }],
        columns: [
          {
            valueType: 'group',
            columns: [
              {
                title: '状态',
                dataIndex: 'state',
                valueType: 'select',
                width: 'xs',
              },
              {
                title: '标题',
                dataIndex: 'title',
                formItemProps: {
                  rules: [{ required: true, message: '此项为必填项' }],
                },
                width: 'm',
              },
            ],
          },
        ],
      },
      {
        title: 'FormSet',
        valueType: 'formSet',
        dataIndex: 'formSet',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            dataIndex: 'groupTitle',
            tip: '标题过长会自动收缩',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
            width: 'm',
          },
        ],
      },
      { title: '创建时间', dataIndex: 'created_at', valueType: 'dateRange' },
    ],
    dataKeys: [
      {
        title: 'Data',
        key: '',
        data: [],
      },
      {
        title: 'Sample Data',
        key: '',
        data: [],
      },
    ],
    examples: [
      {
        title: '',
        key: '',
        data: [],
        arguments: {},
      },
    ],
  },
  {
    id: 'bbb43b52-9367-4bf1-b1ed-6861b8aa4e7e',
    title: 'Line Regression',
    maintainer: 'Jingcheng Yang',
    description:
      'Linear regression is a regression method for linear modeling of the relationship between independent variables and dependent variables.',
    logo: 'https://s1.imagehub.cc/images/2020/08/31/82-JCQ9Fx-tuya.jpg',
    version: 'v0.1.0',
    readme: 'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/test.md',
    tags: ['R', 'Chart'],
    fields: [
      {
        title: '标题',
        dataIndex: 'title',
        formItemProps: {
          rules: [{ required: true, message: '此项为必填项' }],
        },
        width: 'm',
      },
      {
        title: '状态',
        dataIndex: 'state',
        valueType: 'select',
        width: 'm',
      },
      { title: '标签', dataIndex: 'labels', width: 'm' },
      {
        title: '创建时间',
        key: 'showTime',
        dataIndex: 'createName',
        valueType: 'date',
      },
      {
        title: '分组',
        valueType: 'group',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            width: 'md',
            dataIndex: 'groupTitle',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
          },
        ],
      },
      {
        title: '列表',
        valueType: 'formList',
        dataIndex: 'list',
        initialValue: [{ state: 'all', title: '标题' }],
        columns: [
          {
            valueType: 'group',
            columns: [
              {
                title: '状态',
                dataIndex: 'state',
                valueType: 'select',
                width: 'xs',
              },
              {
                title: '标题',
                dataIndex: 'title',
                formItemProps: {
                  rules: [{ required: true, message: '此项为必填项' }],
                },
                width: 'm',
              },
            ],
          },
        ],
      },
      {
        title: 'FormSet',
        valueType: 'formSet',
        dataIndex: 'formSet',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            dataIndex: 'groupTitle',
            tip: '标题过长会自动收缩',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
            width: 'm',
          },
        ],
      },
      { title: '创建时间', dataIndex: 'created_at', valueType: 'dateRange' },
    ],
    dataKeys: [
      {
        title: 'Data',
        key: '',
        data: [],
      },
      {
        title: 'Sample Data',
        key: '',
        data: [],
      },
    ],
    examples: [
      {
        title: '',
        key: '',
        data: [],
        arguments: {},
      },
    ],
  },
  {
    id: 'bbb43b52-9367-4bf1-b1ed-6861b8aa4e8e',
    title: 'Line Regression',
    maintainer: 'Jingcheng Yang',
    description:
      'Linear regression is a regression method for linear modeling of the relationship between independent variables and dependent variables.',
    logo: 'https://s1.imagehub.cc/images/2020/08/31/82-JCQ9Fx-tuya.jpg',
    version: 'v0.1.0',
    readme: 'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/test.md',
    tags: ['R', 'Chart'],
    fields: [
      {
        title: '标题',
        dataIndex: 'title',
        formItemProps: {
          rules: [{ required: true, message: '此项为必填项' }],
        },
        width: 'm',
      },
      {
        title: '状态',
        dataIndex: 'state',
        valueType: 'select',
        width: 'm',
      },
      { title: '标签', dataIndex: 'labels', width: 'm' },
      {
        title: '创建时间',
        key: 'showTime',
        dataIndex: 'createName',
        valueType: 'date',
      },
      {
        title: '分组',
        valueType: 'group',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            width: 'md',
            dataIndex: 'groupTitle',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
          },
        ],
      },
      {
        title: '列表',
        valueType: 'formList',
        dataIndex: 'list',
        initialValue: [{ state: 'all', title: '标题' }],
        columns: [
          {
            valueType: 'group',
            columns: [
              {
                title: '状态',
                dataIndex: 'state',
                valueType: 'select',
                width: 'xs',
              },
              {
                title: '标题',
                dataIndex: 'title',
                formItemProps: {
                  rules: [{ required: true, message: '此项为必填项' }],
                },
                width: 'm',
              },
            ],
          },
        ],
      },
      {
        title: 'FormSet',
        valueType: 'formSet',
        dataIndex: 'formSet',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            dataIndex: 'groupTitle',
            tip: '标题过长会自动收缩',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
            width: 'm',
          },
        ],
      },
      { title: '创建时间', dataIndex: 'created_at', valueType: 'dateRange' },
    ],
    dataKeys: [
      {
        title: 'Data',
        key: '',
        data: [],
      },
      {
        title: 'Sample Data',
        key: '',
        data: [],
      },
    ],
    examples: [
      {
        title: '',
        key: '',
        data: [],
        arguments: {},
      },
    ],
  },
  {
    id: 'bbb43b52-9367-4bf1-b1ed-6861b8aa4e9e',
    title: 'Line Regression',
    maintainer: 'Jingcheng Yang',
    description:
      'Linear regression is a regression method for linear modeling of the relationship between independent variables and dependent variables.',
    logo: 'https://s1.imagehub.cc/images/2020/08/31/82-JCQ9Fx-tuya.jpg',
    version: 'v0.1.0',
    readme: 'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/test.md',
    tags: ['R', 'Chart'],
    fields: [
      {
        title: '标题',
        dataIndex: 'title',
        formItemProps: {
          rules: [{ required: true, message: '此项为必填项' }],
        },
        width: 'm',
      },
      {
        title: '状态',
        dataIndex: 'state',
        valueType: 'select',
        width: 'm',
      },
      { title: '标签', dataIndex: 'labels', width: 'm' },
      {
        title: '创建时间',
        key: 'showTime',
        dataIndex: 'createName',
        valueType: 'date',
      },
      {
        title: '分组',
        valueType: 'group',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            width: 'md',
            dataIndex: 'groupTitle',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
          },
        ],
      },
      {
        title: '列表',
        valueType: 'formList',
        dataIndex: 'list',
        initialValue: [{ state: 'all', title: '标题' }],
        columns: [
          {
            valueType: 'group',
            columns: [
              {
                title: '状态',
                dataIndex: 'state',
                valueType: 'select',
                width: 'xs',
              },
              {
                title: '标题',
                dataIndex: 'title',
                formItemProps: {
                  rules: [{ required: true, message: '此项为必填项' }],
                },
                width: 'm',
              },
            ],
          },
        ],
      },
      {
        title: 'FormSet',
        valueType: 'formSet',
        dataIndex: 'formSet',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            dataIndex: 'groupTitle',
            tip: '标题过长会自动收缩',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
            width: 'm',
          },
        ],
      },
      { title: '创建时间', dataIndex: 'created_at', valueType: 'dateRange' },
    ],
    dataKeys: [
      {
        title: 'Data',
        key: '',
        data: [],
      },
      {
        title: 'Sample Data',
        key: '',
        data: [],
      },
    ],
    examples: [
      {
        title: '',
        key: '',
        data: [],
        arguments: {},
      },
    ],
  },
  {
    id: 'bbb43b52-9367-4bf1-b1ed-6861b8aa4e0e',
    title: 'Line Regression',
    maintainer: 'Jingcheng Yang',
    description:
      'Linear regression is a regression method for linear modeling of the relationship between independent variables and dependent variables.',
    logo: 'https://s1.imagehub.cc/images/2020/08/31/82-JCQ9Fx-tuya.jpg',
    version: 'v0.1.0',
    readme: 'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/test.md',
    tags: ['R', 'Chart'],
    fields: [
      {
        title: '标题',
        dataIndex: 'title',
        formItemProps: {
          rules: [{ required: true, message: '此项为必填项' }],
        },
        width: 'm',
      },
      {
        title: '状态',
        dataIndex: 'state',
        valueType: 'select',
        width: 'm',
      },
      { title: '标签', dataIndex: 'labels', width: 'm' },
      {
        title: '创建时间',
        key: 'showTime',
        dataIndex: 'createName',
        valueType: 'date',
      },
      {
        title: '分组',
        valueType: 'group',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            width: 'md',
            dataIndex: 'groupTitle',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
          },
        ],
      },
      {
        title: '列表',
        valueType: 'formList',
        dataIndex: 'list',
        initialValue: [{ state: 'all', title: '标题' }],
        columns: [
          {
            valueType: 'group',
            columns: [
              {
                title: '状态',
                dataIndex: 'state',
                valueType: 'select',
                width: 'xs',
              },
              {
                title: '标题',
                dataIndex: 'title',
                formItemProps: {
                  rules: [{ required: true, message: '此项为必填项' }],
                },
                width: 'm',
              },
            ],
          },
        ],
      },
      {
        title: 'FormSet',
        valueType: 'formSet',
        dataIndex: 'formSet',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            dataIndex: 'groupTitle',
            tip: '标题过长会自动收缩',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
            width: 'm',
          },
        ],
      },
      { title: '创建时间', dataIndex: 'created_at', valueType: 'dateRange' },
    ],
    dataKeys: [
      {
        title: 'Data',
        key: '',
        data: [],
      },
      {
        title: 'Sample Data',
        key: '',
        data: [],
      },
    ],
    examples: [
      {
        title: '',
        key: '',
        data: [],
        arguments: {},
      },
    ],
  },
  {
    id: 'bbb43b52-9367-4bf1-b1ed-6861b8aa6e5e',
    title: 'Line Regression',
    maintainer: 'Jingcheng Yang',
    description:
      'Linear regression is a regression method for linear modeling of the relationship between independent variables and dependent variables.',
    logo: 'https://s1.imagehub.cc/images/2020/08/31/82-JCQ9Fx-tuya.jpg',
    version: 'v0.1.0',
    readme: 'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/test.md',
    tags: ['R', 'Chart'],
    fields: [
      {
        title: '标题',
        dataIndex: 'title',
        formItemProps: {
          rules: [{ required: true, message: '此项为必填项' }],
        },
        width: 'm',
      },
      {
        title: '状态',
        dataIndex: 'state',
        valueType: 'select',
        width: 'm',
      },
      { title: '标签', dataIndex: 'labels', width: 'm' },
      {
        title: '创建时间',
        key: 'showTime',
        dataIndex: 'createName',
        valueType: 'date',
      },
      {
        title: '分组',
        valueType: 'group',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            width: 'md',
            dataIndex: 'groupTitle',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
          },
        ],
      },
      {
        title: '列表',
        valueType: 'formList',
        dataIndex: 'list',
        initialValue: [{ state: 'all', title: '标题' }],
        columns: [
          {
            valueType: 'group',
            columns: [
              {
                title: '状态',
                dataIndex: 'state',
                valueType: 'select',
                width: 'xs',
              },
              {
                title: '标题',
                dataIndex: 'title',
                formItemProps: {
                  rules: [{ required: true, message: '此项为必填项' }],
                },
                width: 'm',
              },
            ],
          },
        ],
      },
      {
        title: 'FormSet',
        valueType: 'formSet',
        dataIndex: 'formSet',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            dataIndex: 'groupTitle',
            tip: '标题过长会自动收缩',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
            width: 'm',
          },
        ],
      },
      { title: '创建时间', dataIndex: 'created_at', valueType: 'dateRange' },
    ],
    dataKeys: [
      {
        title: 'Data',
        key: '',
        data: [],
      },
      {
        title: 'Sample Data',
        key: '',
        data: [],
      },
    ],
    examples: [
      {
        title: '',
        key: '',
        data: [],
        arguments: {},
      },
    ],
  },
  {
    id: 'bbb43b52-9367-4bf1-b1ed-6861b9aa4e5e',
    title: 'Line Regression',
    maintainer: 'Jingcheng Yang',
    description:
      'Linear regression is a regression method for linear modeling of the relationship between independent variables and dependent variables.',
    logo: 'https://s1.imagehub.cc/images/2020/08/31/82-JCQ9Fx-tuya.jpg',
    version: 'v0.1.0',
    readme: 'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/test.md',
    tags: ['R', 'Chart'],
    fields: [
      {
        title: '标题',
        dataIndex: 'title',
        formItemProps: {
          rules: [{ required: true, message: '此项为必填项' }],
        },
        width: 'm',
      },
      {
        title: '状态',
        dataIndex: 'state',
        valueType: 'select',
        width: 'm',
      },
      { title: '标签', dataIndex: 'labels', width: 'm' },
      {
        title: '创建时间',
        key: 'showTime',
        dataIndex: 'createName',
        valueType: 'date',
      },
      {
        title: '分组',
        valueType: 'group',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            width: 'md',
            dataIndex: 'groupTitle',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
          },
        ],
      },
      {
        title: '列表',
        valueType: 'formList',
        dataIndex: 'list',
        initialValue: [{ state: 'all', title: '标题' }],
        columns: [
          {
            valueType: 'group',
            columns: [
              {
                title: '状态',
                dataIndex: 'state',
                valueType: 'select',
                width: 'xs',
              },
              {
                title: '标题',
                dataIndex: 'title',
                formItemProps: {
                  rules: [{ required: true, message: '此项为必填项' }],
                },
                width: 'm',
              },
            ],
          },
        ],
      },
      {
        title: 'FormSet',
        valueType: 'formSet',
        dataIndex: 'formSet',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            dataIndex: 'groupTitle',
            tip: '标题过长会自动收缩',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
            width: 'm',
          },
        ],
      },
      { title: '创建时间', dataIndex: 'created_at', valueType: 'dateRange' },
    ],
    dataKeys: [
      {
        title: 'Data',
        key: '',
        data: [],
      },
      {
        title: 'Sample Data',
        key: '',
        data: [],
      },
    ],
    examples: [
      {
        title: '',
        key: '',
        data: [],
        arguments: {},
      },
    ],
  },
  {
    id: 'bbb43b52-9367-4bf1-b1ed-6861b8aa7e5e',
    title: 'Line Regression',
    maintainer: 'Jingcheng Yang',
    description:
      'Linear regression is a regression method for linear modeling of the relationship between independent variables and dependent variables.',
    logo: 'https://s1.imagehub.cc/images/2020/08/31/82-JCQ9Fx-tuya.jpg',
    version: 'v0.1.0',
    readme: 'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/test.md',
    tags: ['R', 'Chart'],
    fields: [
      {
        title: '标题',
        dataIndex: 'title',
        formItemProps: {
          rules: [{ required: true, message: '此项为必填项' }],
        },
        width: 'm',
      },
      {
        title: '状态',
        dataIndex: 'state',
        valueType: 'select',
        width: 'm',
      },
      { title: '标签', dataIndex: 'labels', width: 'm' },
      {
        title: '创建时间',
        key: 'showTime',
        dataIndex: 'createName',
        valueType: 'date',
      },
      {
        title: '分组',
        valueType: 'group',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            width: 'md',
            dataIndex: 'groupTitle',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
          },
        ],
      },
      {
        title: '列表',
        valueType: 'formList',
        dataIndex: 'list',
        initialValue: [{ state: 'all', title: '标题' }],
        columns: [
          {
            valueType: 'group',
            columns: [
              {
                title: '状态',
                dataIndex: 'state',
                valueType: 'select',
                width: 'xs',
              },
              {
                title: '标题',
                dataIndex: 'title',
                formItemProps: {
                  rules: [{ required: true, message: '此项为必填项' }],
                },
                width: 'm',
              },
            ],
          },
        ],
      },
      {
        title: 'FormSet',
        valueType: 'formSet',
        dataIndex: 'formSet',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            dataIndex: 'groupTitle',
            tip: '标题过长会自动收缩',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
            width: 'm',
          },
        ],
      },
      { title: '创建时间', dataIndex: 'created_at', valueType: 'dateRange' },
    ],
    dataKeys: [
      {
        title: 'Data',
        key: '',
        data: [],
      },
      {
        title: 'Sample Data',
        key: '',
        data: [],
      },
    ],
    examples: [
      {
        title: '',
        key: '',
        data: [],
        arguments: {},
      },
    ],
  },
  {
    id: 'bbb43b52-9367-4bf2-b1ed-6861b8aa4e5e',
    title: 'Line Regression',
    maintainer: 'Jingcheng Yang',
    description:
      'Linear regression is a regression method for linear modeling of the relationship between independent variables and dependent variables.',
    logo: 'https://s1.imagehub.cc/images/2020/08/31/82-JCQ9Fx-tuya.jpg',
    version: 'v0.1.0',
    readme: 'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/test.md',
    tags: ['R', 'Chart'],
    fields: [
      {
        title: '标题',
        dataIndex: 'title',
        formItemProps: {
          rules: [{ required: true, message: '此项为必填项' }],
        },
        width: 'm',
      },
      {
        title: '状态',
        dataIndex: 'state',
        valueType: 'select',
        width: 'm',
      },
      { title: '标签', dataIndex: 'labels', width: 'm' },
      {
        title: '创建时间',
        key: 'showTime',
        dataIndex: 'createName',
        valueType: 'date',
      },
      {
        title: '分组',
        valueType: 'group',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            width: 'md',
            dataIndex: 'groupTitle',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
          },
        ],
      },
      {
        title: '列表',
        valueType: 'formList',
        dataIndex: 'list',
        initialValue: [{ state: 'all', title: '标题' }],
        columns: [
          {
            valueType: 'group',
            columns: [
              {
                title: '状态',
                dataIndex: 'state',
                valueType: 'select',
                width: 'xs',
              },
              {
                title: '标题',
                dataIndex: 'title',
                formItemProps: {
                  rules: [{ required: true, message: '此项为必填项' }],
                },
                width: 'm',
              },
            ],
          },
        ],
      },
      {
        title: 'FormSet',
        valueType: 'formSet',
        dataIndex: 'formSet',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            dataIndex: 'groupTitle',
            tip: '标题过长会自动收缩',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
            width: 'm',
          },
        ],
      },
      { title: '创建时间', dataIndex: 'created_at', valueType: 'dateRange' },
    ],
    dataKeys: [
      {
        title: 'Data',
        key: '',
        data: [],
      },
      {
        title: 'Sample Data',
        key: '',
        data: [],
      },
    ],
    examples: [
      {
        title: '',
        key: '',
        data: [],
        arguments: {},
      },
    ],
  },
  {
    id: 'bbb43b52-9367-5bf1-b1ed-6861b8aa4e5e',
    title: 'Line Regression',
    maintainer: 'Jingcheng Yang',
    description:
      'Linear regression is a regression method for linear modeling of the relationship between independent variables and dependent variables.',
    logo: 'https://s1.imagehub.cc/images/2020/08/31/82-JCQ9Fx-tuya.jpg',
    version: 'v0.1.0',
    readme: 'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/test.md',
    tags: ['R', 'Chart'],
    fields: [
      {
        title: '标题',
        dataIndex: 'title',
        formItemProps: {
          rules: [{ required: true, message: '此项为必填项' }],
        },
        width: 'm',
      },
      {
        title: '状态',
        dataIndex: 'state',
        valueType: 'select',
        width: 'm',
      },
      { title: '标签', dataIndex: 'labels', width: 'm' },
      {
        title: '创建时间',
        key: 'showTime',
        dataIndex: 'createName',
        valueType: 'date',
      },
      {
        title: '分组',
        valueType: 'group',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            width: 'md',
            dataIndex: 'groupTitle',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
          },
        ],
      },
      {
        title: '列表',
        valueType: 'formList',
        dataIndex: 'list',
        initialValue: [{ state: 'all', title: '标题' }],
        columns: [
          {
            valueType: 'group',
            columns: [
              {
                title: '状态',
                dataIndex: 'state',
                valueType: 'select',
                width: 'xs',
              },
              {
                title: '标题',
                dataIndex: 'title',
                formItemProps: {
                  rules: [{ required: true, message: '此项为必填项' }],
                },
                width: 'm',
              },
            ],
          },
        ],
      },
      {
        title: 'FormSet',
        valueType: 'formSet',
        dataIndex: 'formSet',
        columns: [
          {
            title: '状态',
            dataIndex: 'groupState',
            valueType: 'select',
            width: 'xs',
          },
          {
            title: '标题',
            dataIndex: 'groupTitle',
            tip: '标题过长会自动收缩',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
            width: 'm',
          },
        ],
      },
      { title: '创建时间', dataIndex: 'created_at', valueType: 'dateRange' },
    ],
    dataKeys: [
      {
        title: 'Data',
        key: '',
        data: [],
      },
      {
        title: 'Sample Data',
        key: '',
        data: [],
      },
    ],
    examples: [
      {
        title: '',
        key: '',
        data: [],
        arguments: {},
      },
    ],
  },
];
