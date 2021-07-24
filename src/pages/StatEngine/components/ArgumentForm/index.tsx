import {
  BetaSchemaForm,
  ProFormColumnsType,
  ProFormLayoutType,
  ProFormSelect,
} from '@ant-design/pro-form';
import { Button, Empty } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import FormItem from 'antd/lib/form/FormItem';
import React, { useState, memo } from 'react';
import { DataItem } from './data';

export type ArgumentProps = {
  columns: ProFormColumnsType<DataItem>[];
  height?: string;
  labelSpan?: number;
};

const ArgumentForm: React.FC<ArgumentProps> = (props) => {
  const { columns, height, labelSpan } = props;

  const activateBtn = (
    <FormItem label="Editor" labelCol={{ span: labelSpan }}>
      <Button style={{ width: '100%' }}>
        <EditOutlined />
        Edit
      </Button>
    </FormItem>
  );

  const [layoutType, setLayoutType] = useState<ProFormLayoutType>('Form');

  return columns.length > 0 ? (
    <>
      <ProFormSelect
        label="布局方式"
        labelCol={{ span: labelSpan }}
        options={['ProForm', 'ModalForm', 'DrawerForm', 'LightFilter', 'QueryFilter']}
        fieldProps={{
          value: layoutType,
          onChange: (e) => setLayoutType(e),
        }}
      />
      <BetaSchemaForm<DataItem>
        className="schema-form"
        style={{ height, overflow: 'scroll' }}
        trigger={activateBtn}
        layoutType={layoutType}
        onFinish={async (values) => {
          console.log(values);
        }}
        columns={columns}
      />
    </>
  ) : (
    <Empty />
  );
};

export default memo(ArgumentForm);
