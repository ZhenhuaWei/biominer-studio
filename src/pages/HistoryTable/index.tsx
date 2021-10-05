import { Drawer, message } from 'antd';
import React, { useState, useRef } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import type { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
import ProDescriptions from '@ant-design/pro-descriptions';
import { getTasks, getChart } from '@/services/biominer/api';
import { API } from '@/services/biominer/typings';
import { useHistory } from 'react-router-dom';
import './index.less';

const TableList: React.FC = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const history = useHistory();
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.TaskListItem>();
  const [selectedRowsState, setSelectedRows] = useState<API.TaskListItem[]>([]);

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  const columns: ProColumns<API.TaskListItem>[] = [
    {
      title: <FormattedMessage id="history-table.id" defaultMessage="Task ID" />,
      dataIndex: 'id',
      tip: 'The task id is the unique key',
      hideInTable: true,
      hideInSearch: true,
      hideInForm: true,
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: <FormattedMessage id="history-table.taskName" defaultMessage="Task Name" />,
      dataIndex: 'name',
      tip: 'The task name is the unique key',
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: <FormattedMessage id="history-table.pluginName" defaultMessage="Chart Name" />,
      dataIndex: 'plugin_name',
      valueType: 'text',
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              getChart(entity.plugin_name)
                .then((response) => {
                  history.push('/stat-engine/index', {
                    chart: response,
                  });
                })
                .catch((error) => {
                  message.error(`Cannot find the ${entity.plugin_name}`);
                  console.log('Get Chart Error: ', error);
                });
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: <FormattedMessage id="history-table.pluginVersion" defaultMessage="Version" />,
      dataIndex: 'plugin_version',
      hideInSearch: true,
      hideInForm: true,
      valueType: 'text',
    },
    {
      title: <FormattedMessage id="history-table.percentage" defaultMessage="Percentage" />,
      dataIndex: 'percentage',
      hideInSearch: true,
      hideInForm: true,
      hideInTable: true,
      hideInSetting: true,
      valueType: 'progress',
    },
    {
      title: <FormattedMessage id="history-table.status" defaultMessage="Status" />,
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        Started: {
          text: <FormattedMessage id="history-table.started" defaultMessage="Started" />,
          status: 'Processing',
        },
        Finished: {
          text: <FormattedMessage id="history-table.finished" defaultMessage="Finished" />,
          status: 'Success',
        },
        Failed: {
          text: <FormattedMessage id="history-table.failed" defaultMessage="Failed" />,
          status: 'Error',
        },
      },
    },
    {
      title: <FormattedMessage id="history-table.startedAt" defaultMessage="Started" />,
      // sorter: true,
      dataIndex: 'started_time',
      hideInSearch: true,
      valueType: 'dateTime',
      renderFormItem: (item, { defaultRender, ...rest }, form) => {
        return defaultRender(item);
      },
    },
    {
      title: <FormattedMessage id="history-table.finishedAt" defaultMessage="Finished" />,
      // sorter: true,
      hideInSearch: true,
      dataIndex: 'finished_time',
      valueType: 'dateTime',
      renderFormItem: (item, { defaultRender, ...rest }, form) => {
        return defaultRender(item);
      },
    },
    {
      title: <FormattedMessage id="history-table.payload" defaultMessage="Payload" />,
      dataIndex: 'payload',
      hideInSearch: true,
      hideInForm: true,
      hideInTable: true,
      hideInSetting: true,
      valueType: 'jsonCode',
      renderText: (text, record, index, action) => {
        return JSON.stringify(text);
      },
      colSpan: 2,
    },
  ];

  return (
    <PageContainer className="history-table-page-container">
      <ProTable<API.TaskListItem, API.PageParams>
        className="history-table"
        headerTitle={intl.formatMessage({
          id: 'history-table.title',
          defaultMessage: 'Task History',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => []}
        request={getTasks}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />

      <Drawer
        width={'50%'}
        visible={showDetail}
        className="task-details"
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<API.TaskListItem>
            column={1}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<API.TaskListItem>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
