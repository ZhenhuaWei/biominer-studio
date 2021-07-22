import { GridContent } from '@ant-design/pro-layout';
import { Col, Row, Tabs, Space, Button, Tooltip } from 'antd';

import {
  InfoCircleOutlined,
  StopOutlined,
  DatabaseOutlined,
  UploadOutlined,
  DownloadOutlined,
  BarChartOutlined,
  ContainerOutlined,
  SnippetsOutlined,
  HistoryOutlined,
  ReloadOutlined,
  IssuesCloseOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import { DataKey } from './data';
import './index.less';

import MarkdownViewer from './components/MarkdownViewer';

const { TabPane } = Tabs;

const StatEngine: React.FC = () => {
  const [leftSpan, setLeftSpan] = useState<number>(12);
  const [dataKeys] = useState<DataKey[]>([
    { title: 'Data', data: [] },
    { title: 'Sample Data', data: [] },
  ]);
  const [resizeBtnActive, setResizeBtnActive] = useState<boolean>(false);

  const summaryOperations = (
    <Space>
      <Tooltip title="Reset Data and Arguments">
        <Button type="primary" danger icon={<StopOutlined />}>
          Reset
        </Button>
      </Tooltip>
      <Tooltip title="Load Example Data">
        <Button icon={<DatabaseOutlined />}>{leftSpan >= 12 ? 'Example' : ''}</Button>
      </Tooltip>
      <Tooltip title="Import Argument File">
        <Button icon={<UploadOutlined />}>{leftSpan >= 12 ? 'Import' : ''}</Button>
      </Tooltip>
      <Tooltip title="Export Argument File">
        <Button icon={<DownloadOutlined />}>{leftSpan >= 12 ? 'Export' : ''}</Button>
      </Tooltip>
    </Space>
  );

  const dataOperations = <Button icon={<ContainerOutlined />}>Load Data</Button>;

  const resultOperations = (
    <Space>
      <Tooltip title="List all charts">
        <Button type="primary" icon={<BarChartOutlined />}>
          Charts
        </Button>
      </Tooltip>
      <Tooltip title="List all history">
        <Button icon={<HistoryOutlined />}>History</Button>
      </Tooltip>
    </Space>
  );

  const logOperations = <Button icon={<ReloadOutlined />}>Refresh</Button>;

  const getRightSpan = function (customLeftSpan: number): number {
    return 24 - customLeftSpan ? 24 - customLeftSpan : 24;
  };

  return (
    <GridContent>
      <Row className="stat-engine" gutter={8}>
        <Col className="left" xxl={leftSpan} xl={leftSpan} lg={leftSpan} md={24} sm={24} xs={24}>
          <Row className="left__content">
            <Col className="left__tabs">
              <Tabs
                defaultActiveKey="1"
                className="left__tabs__summary"
                tabBarExtraContent={summaryOperations}
              >
                <TabPane
                  tab={
                    <span>
                      <InfoCircleOutlined />
                      Summary
                    </span>
                  }
                  key="1"
                >
                  <MarkdownViewer url="http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/test.md" />
                </TabPane>
              </Tabs>
              <Tabs
                defaultActiveKey="1"
                className="left__tabs__arguments"
                tabBarExtraContent={dataOperations}
              >
                <TabPane tab={<span>Arguments</span>} key="1">
                  Tab 1
                </TabPane>
                {dataKeys.map((dataKey, index) => {
                  return (
                    <TabPane tab={<span>{dataKey.title}</span>} key={index + 2}>
                      Tab 1
                    </TabPane>
                  );
                })}
              </Tabs>
            </Col>
            <Col
              className="left__divider"
              onMouseEnter={() => {
                setResizeBtnActive(true);
              }}
              onMouseLeave={() => {
                setResizeBtnActive(false);
              }}
            >
              {resizeBtnActive ? (
                <Space>
                  <Button
                    onClick={() => {
                      setLeftSpan(12);
                    }}
                    className="resize-btn btn-1"
                    size="small"
                  >
                    1:1
                  </Button>
                  <Button
                    onClick={() => {
                      setLeftSpan(16);
                    }}
                    className="resize-btn btn-2"
                    size="small"
                  >
                    2:1
                  </Button>
                  <Button
                    onClick={() => {
                      setLeftSpan(8);
                    }}
                    className="resize-btn btn-3"
                    size="small"
                  >
                    1:2
                  </Button>
                  <Button
                    onClick={() => {
                      setLeftSpan(24);
                    }}
                    className="resize-btn btn-4"
                    size="small"
                  >
                    Full
                  </Button>
                </Space>
              ) : null}
            </Col>
          </Row>
        </Col>
        <Col
          className="right"
          xxl={getRightSpan(leftSpan)}
          xl={getRightSpan(leftSpan)}
          lg={getRightSpan(leftSpan)}
          md={24}
          sm={24}
          xs={24}
        >
          <Row className="right__content">
            <Col className="right__tabs">
              <Tabs
                defaultActiveKey="1"
                className="right__tabs-result"
                tabBarExtraContent={resultOperations}
              >
                <TabPane
                  tab={
                    <span>
                      <BarChartOutlined />
                      Figure
                    </span>
                  }
                  key="1"
                >
                  <Col id="graph-container">
                    <img
                      style={{ width: '100%' }}
                      src="https://s1.imagehub.cc/images/2020/08/31/82-JCQ9Fx-tuya.jpg"
                    />
                  </Col>
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <SnippetsOutlined />
                      Results
                    </span>
                  }
                  key="2"
                >
                  <Col id="result-container">Comming Soon...</Col>
                </TabPane>
              </Tabs>
              <Tabs
                defaultActiveKey="1"
                className="right__tabs-log"
                tabBarExtraContent={logOperations}
              >
                <TabPane
                  tab={
                    <span>
                      <IssuesCloseOutlined />
                      Log
                    </span>
                  }
                  key="1"
                >
                  Tab 1
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Col>
      </Row>
    </GridContent>
  );
};

export default StatEngine;
