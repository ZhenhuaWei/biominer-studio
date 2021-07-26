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

export type FormType = Parameters<typeof ProForm>[0]['layout'];

export type ArgumentProps = {
  columns: ProFormColumnsType<DataItem>[];
  height?: string;
  labelSpan?: number;
  layout?: FormType;
};

const ArgumentForm: React.FC<ArgumentProps> = (props) => {
  const { columns, height, labelSpan, layout } = props;

  const activateBtn = (
    <FormItem label="Editor" labelCol={{ span: labelSpan }}>
      <Button style={{ width: '100%' }}>
        <EditOutlined />
        Edit
      </Button>
    </FormItem>
  );

  const [layoutType, setLayoutType] = useState<ProFormLayoutType>('Form');

  const intl = useIntl();
  interface UIContext {
    [key: string]: any;
  }

  const uiContext: UIContext = {};
  Object.keys(langData).forEach((key) => {
    uiContext[key] = intl.formatMessage(langData[key]);
  });

  const getLabelSpan = (span: number | undefined): number => {
    if (layout && layout === 'vertical') {
      return 24;
    }
    return span || 4;
  };

  const getWrapperSpan = (span: number | undefined): number => {
    if (layout && layout === 'vertical') {
      return 24;
    }
    return span ? 24 - span : 20;
  };

  console.log('ArgumentForm updated');

  return columns.length > 0 ? (
    <Row className="argument-form">
      <Col className="argument-form__header">
        <ProFormSelect
          label="布局方式"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          options={['ProForm', 'ModalForm', 'DrawerForm', 'LightFilter', 'QueryFilter']}
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
        className={`schema-form ${layout || 'vertical'}`}
        trigger={activateBtn}
        style={{ height }}
        layoutType={layoutType}
        labelCol={{ span: getLabelSpan(labelSpan) }}
        wrapperCol={{ span: getWrapperSpan(labelSpan) }}
        layout={layout || 'vertical'}
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
