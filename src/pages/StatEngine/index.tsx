import { useIntl } from 'umi';
import { GridContent } from '@ant-design/pro-layout';
import { Col, Row, Tabs, Space, Button, Tooltip, Drawer } from 'antd';
import type { ProFormColumnsType } from '@ant-design/pro-form';

import {
  EditOutlined,
  InfoCircleOutlined,
  StopOutlined,
  DatabaseOutlined,
  UploadOutlined,
  DownloadOutlined,
  BarChartOutlined,
  ContainerOutlined,
  SnippetsOutlined,
  HistoryOutlined,
  IssuesCloseOutlined,
  FullscreenExitOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import './index.less';

// Custom Component
import MarkdownViewer from './components/MarkdownViewer';
import LogViewer from './components/LogViewer';
import Resizer from './components/Resizer';
import ArgumentForm from './components/ArgumentForm';
import PlotlyViewer from './components/PlotlyViewer';
import ChartList from './components/ChartList';

// Custom DataType
import { langData } from './lang';
import { DataKey, ChartData, DataItem } from './components/ChartList/data';
import { PlotlyEditorState } from './components/PlotlyViewer/data';

// Custom Example Data
import chartExampleData from './components/ChartList/exampleData';
import { useEffect } from 'react';

const { TabPane } = Tabs;

const plotlyExampleData = {
  layout: {
    annotations: [
      {
        text: 'simple annotation',
        x: 0,
        xref: 'paper',
        y: 0,
        yref: 'paper',
      },
    ],
    title: 'simple example',
    xaxis: {
      title: 'time',
    },
    autosize: true,
  },
  data: [
    {
      marker: {
        color: 'rgb(16, 32, 77)',
      },
      type: 'scatter',
      x: [1, 2, 3],
      y: [6, 2, 3],
    },
    {
      name: 'bar chart example',
      type: 'bar',
      x: [1, 2, 3],
      y: [6, 2, 3],
    },
  ],
};

const StatEngine: React.FC = () => {
  const [leftSpan, setLeftSpan] = useState<number>(12);
  const [dataKeys, setDataKeys] = useState<DataKey[]>([]);
  const [resizeBtnActive, setResizeBtnActive] = useState<boolean>(false);
  const [logLink, setLogLink] = useState<string>(
    'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/test.log',
  );
  const [markdownLink, setMarkdownLink] = useState<string>('');
  const [plotlyEditorMode, setPlotlyEditorMode] = useState<string>('Plotly');
  const [plotlyData, setPlotlyData] = useState<PlotlyEditorState>({ data: [], layout: {} });
  const [chartsVisible, setChartsVisible] = useState<boolean>(false);
  const [argumentColumns, setArgumentColumns] = useState<ProFormColumnsType<DataItem>[]>([]);
  const [charts, setCharts] = useState<ChartData[]>([]);

  useEffect(() => {
    setCharts(chartExampleData);
  });

  const selectItem = (chart: ChartData) => {
    // README
    setMarkdownLink(chart.readme);
    // Reset Log Container
    setLogLink('');
    // Reset DataKey
    setDataKeys(chart.dataKeys);
    // Reset Argument
    setArgumentColumns(chart.fields);
    // Initialize Plotly
    setPlotlyData({
      ...plotlyData,
      layout: plotlyExampleData.layout,
      data: plotlyExampleData.data,
    });
    // Close Charts Drawer
    setChartsVisible(false);
  };

  const intl = useIntl();
  interface UIContext {
    [key: string]: any;
  }

  const uiContext: UIContext = {};
  Object.keys(langData).forEach((key) => {
    uiContext[key] = intl.formatMessage(langData[key]);
  });

  const summaryOperations = (
    <Space>
      <Tooltip title={uiContext.resetTooltip}>
        <Button disabled type="primary" danger icon={<StopOutlined />}>
          {uiContext.reset}
        </Button>
      </Tooltip>
      <Tooltip title={uiContext.exampleTooltip}>
        <Button disabled icon={<DatabaseOutlined />}>
          {leftSpan >= 12 ? `${uiContext.example}` : ''}
        </Button>
      </Tooltip>
      <Tooltip title={uiContext.importTooltip}>
        <Button disabled icon={<UploadOutlined />}>
          {leftSpan >= 12 ? `${uiContext.import}` : ''}
        </Button>
      </Tooltip>
      <Tooltip title={uiContext.exportTooltip}>
        <Button disabled icon={<DownloadOutlined />}>
          {leftSpan >= 12 ? `${uiContext.export}` : ''}
        </Button>
      </Tooltip>
    </Space>
  );

  const dataOperations = <Button icon={<ContainerOutlined />}>{uiContext.loadData}</Button>;

  const resultOperations = (
    <Space>
      <Tooltip title="Edit the Chart">
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => {
            setPlotlyEditorMode('PlotlyEditor');
          }}
        >
          Edit
        </Button>
      </Tooltip>
      <Tooltip title="List all charts">
        <Button
          onClick={() => {
            setChartsVisible(true);
          }}
          icon={<BarChartOutlined />}
        >
          Charts
        </Button>
      </Tooltip>
      <Tooltip title="List all history">
        <Button icon={<HistoryOutlined />}>History</Button>
      </Tooltip>
    </Space>
  );

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
                  <MarkdownViewer url={markdownLink} />
                </TabPane>
              </Tabs>
              <Tabs
                defaultActiveKey="1"
                className="left__tabs__arguments"
                tabBarExtraContent={dataOperations}
              >
                <TabPane tab={<span>Arguments</span>} key="1">
                  <ArgumentForm
                    labelSpan={4}
                    height="calc(100% - 62px)"
                    columns={argumentColumns}
                  ></ArgumentForm>
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
            <Resizer
              className="left__divider"
              HoverHandler={setResizeBtnActive}
              ClickHandler={setLeftSpan}
              btnActive={resizeBtnActive}
            ></Resizer>
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
                  <Col
                    id="graph-container"
                    className={`result-container
                      ${plotlyEditorMode === 'PlotlyEditor' ? 'full-screen' : 'no-full-screen'}`}
                  >
                    {plotlyEditorMode === 'PlotlyEditor' ? (
                      <Button
                        className="exit-editor"
                        onClick={() => {
                          setPlotlyEditorMode('Plotly');
                        }}
                      >
                        <FullscreenExitOutlined />
                        Exit Editor
                      </Button>
                    ) : null}
                    <PlotlyViewer state={plotlyData} mode={plotlyEditorMode}></PlotlyViewer>
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
                  <Col id="result-container" className="result-container">
                    Comming Soon...
                  </Col>
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <IssuesCloseOutlined />
                      Log
                    </span>
                  }
                  key="3"
                >
                  <LogViewer height="530" url={logLink} />
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Col>
      </Row>
      <Drawer
        title={`Charts (${charts.length})`}
        placement="right"
        closable
        width="50%"
        onClose={() => {
          setChartsVisible(false);
        }}
        visible={chartsVisible}
      >
        <ChartList onClickItem={selectItem} charts={charts} total={charts.length}></ChartList>
      </Drawer>
    </GridContent>
  );
};

export default StatEngine;
