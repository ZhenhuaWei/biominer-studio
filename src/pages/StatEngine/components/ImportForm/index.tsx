import { memo } from 'react';
import { Col, Row, Tabs, Button, Tooltip, message, Tag, Input } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import React, { useState } from 'react';

import { TableData, PapaTableData } from './data';
import { fetchData } from './service';
import './index.less';

const { TabPane } = Tabs;
const { Search } = Input;

export type ImportFormProps = {
  onLoad: (data: TableData) => void;
};

const example = 'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/iris.csv';

const ImportForm: React.FC<ImportFormProps> = (props) => {
  const { onLoad } = props;

  const [exampleLink, setExampleLink] = useState<string>('');
  const [loadActive, setLoadActive] = useState<boolean>(false);

  const doCopy = (link: string) => {
    setExampleLink(link);
    navigator.clipboard.writeText(link);
    message.success('Copy Successful');
  };

  const onSearch = (externalURL: string) => {
    setLoadActive(true);
    console.log('onSearch: ', externalURL);
    fetchData(externalURL)
      .then((response) => {
        console.log('getFile: ', response);
        setLoadActive(false);
        const papaTableData: PapaTableData = response;
        onLoad(papaTableData.data);
        message.success('Loaded Suessfully.');
      })
      .catch((error) => {
        console.log('getFile Error: ', error);
        setLoadActive(false);
        message.error("Can't load the data, please check your url & try agian later.");
      });
  };

  console.log('ImportForm updated');

  return (
    <Row className="import-form">
      <Col className="control-panel">
        <span>
          <InfoCircleFilled />
          Use first row as column headers &nbsp;
        </span>
      </Col>
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab={<span>By URL</span>} key="1">
          <Row className="import-box">
            <Search
              placeholder="Input your data with URL"
              style={{ width: '80%' }}
              disabled={!exampleLink || loadActive}
              onSearch={onSearch}
              value={exampleLink}
              enterButton="Load"
            />
            <Row>HTTPS only. Supported file types: CSV, TSV.</Row>
            <br />
            <span style={{ marginBottom: '10px' }}>Example Data URL</span>
            <Tooltip placement="top" title={<a onClick={() => doCopy(example)}>Copy Link</a>}>
              <Tag>{example}</Tag>
            </Tooltip>
          </Row>
        </TabPane>
        <TabPane tab={<span>Browser</span>} key="2">
          <Row className="import-box">
            <Button>Browser Remote Files</Button>
            <Row>Supported file types: CSV, TSV</Row>
          </Row>
        </TabPane>
        <TabPane tab={<span>DataSets</span>} key="3">
          <Row className="import-box">
            <Button>Browser DataSets</Button>
          </Row>
        </TabPane>
      </Tabs>
    </Row>
  );
};

export default memo(ImportForm);
