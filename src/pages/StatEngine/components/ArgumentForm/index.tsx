import { useIntl } from 'umi';
import ProForm, {
  BetaSchemaForm,
  ProFormColumnsType,
  ProFormLayoutType,
  ProFormSelect,
} from '@ant-design/pro-form';
import { Button, Empty, Row, Tooltip, Space, Col } from 'antd';
import { EditOutlined, UploadOutlined, DownloadOutlined } from '@ant-design/icons';
import FormItem from 'antd/lib/form/FormItem';
import React, { useState, memo } from 'react';

import './index.less';

import { DataItem } from './data';
import { langData } from './lang';

export type ArgumentProps = {
  columns: ProFormColumnsType<DataItem>[];
  height?: string;
  labelSpan?: number;
};

const ArgumentForm: React.FC<ArgumentProps> = (props) => {
  const { columns, height, labelSpan } = props;

  const activateBtn = (
    <FormItem
      label="Editor"
      style={{ width: '50%' }}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
    >
      <Button style={{ width: '100%' }}>
        <EditOutlined />
        Edit
      </Button>
    </FormItem>
  );

  const [layoutType, setLayoutType] = useState<ProFormLayoutType>('QueryFilter');

  const intl = useIntl();
  interface UIContext {
    [key: string]: any;
  }

  const uiContext: UIContext = {};
  Object.keys(langData).forEach((key) => {
    uiContext[key] = intl.formatMessage(langData[key]);
  });

  console.log('ArgumentForm updated');

  return columns.length > 0 ? (
    <Row className="argument-form">
      <Col className="argument-form__header">
        <ProFormSelect
          label="Layout"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          options={['ModalForm', 'QueryFilter']}
          fieldProps={{
            value: layoutType,
            onChange: (e) => setLayoutType(e),
          }}
        />
        <Space className="btn-group">
          <Tooltip title={uiContext.importTooltip}>
            <Button disabled icon={<UploadOutlined />}>
              {`${uiContext.import}`}
            </Button>
          </Tooltip>
          <Tooltip title={uiContext.exportTooltip}>
            <Button disabled icon={<DownloadOutlined />}>
              {`${uiContext.export}`}
            </Button>
          </Tooltip>
        </Space>
      </Col>
      <BetaSchemaForm<DataItem>
        className="schema-form vertical"
        trigger={activateBtn}
        style={{ height }}
        span={labelSpan}
        defaultCollapsed={false}
        layoutType={layoutType}
        layout="vertical"
        onFinish={async (values) => {
          console.log(values);
        }}
        columns={columns}
      />
    </Row>
  ) : (
    <Empty />
  );
};

export default memo(ArgumentForm);
