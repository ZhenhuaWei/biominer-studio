import { useIntl } from 'umi';
import React, { useState, useEffect } from 'react';
import { Space, Col, Button, Tabs, Row, Tooltip, Drawer } from 'antd';
import {
  EditOutlined,
  FullscreenExitOutlined,
  SnippetsOutlined,
  BarChartOutlined,
  HistoryOutlined,
  IssuesCloseOutlined,
} from '@ant-design/icons';
import { memo } from 'react';

import PlotlyViewer from '../PlotlyViewer/indexClass';
import ChartList from '../ChartList';
import LogViewer from '../LogViewer/indexLog';
import { ChartMetaData } from '../ChartList/data';

import { getPlotlyData } from '@/services/biominer/api';

import { langData } from './lang';
import './index.less';

const { TabPane } = Tabs;

export type ResultPanelProps = {
  onClickItem: (chart: ChartMetaData) => void;
  taskId: string;
  logLink: string;
  results: string[];
  charts: string[];
  responsiveKey: number | string;
};

const ResultPanel: React.FC<ResultPanelProps> = (props) => {
  const intl = useIntl();
  interface UIContext {
    [key: string]: any;
  }

  const uiContext: UIContext = {};
  Object.keys(langData).forEach((key) => {
    uiContext[key] = intl.formatMessage(langData[key]);
  });

  const { onClickItem, logLink, responsiveKey, taskId, results, charts } = props;

  const [plotlyEditorMode, setPlotlyEditorMode] = useState<string>('Plotly');
  const [chartsVisible, setChartsVisible] = useState<boolean>(false);

  const [dataSources, setDataSources] = useState<object>({});
  const [dataSourceOptions, setDataSourceOptions] = useState<object[]>([]);

  useEffect(() => {
    if (results.length > 0) {
      getPlotlyData({ filelink: results[0] }).then((response) => {
        setDataSources(response);
        setDataSourceOptions(
          Object.keys(response).map((name) => ({
            value: name,
            label: name,
          })),
        );
      });
    }
  }, [results]);

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
          {uiContext.edit}
        </Button>
      </Tooltip>
      <Tooltip title="List all charts">
        <Button
          onClick={() => {
            setChartsVisible(true);
          }}
          icon={<BarChartOutlined />}
        >
          {uiContext.charts}
        </Button>
      </Tooltip>
      <Tooltip title="List all history">
        <Button disabled icon={<HistoryOutlined />}>
          {uiContext.history}
        </Button>
      </Tooltip>
    </Space>
  );

  console.log('ResultPanel updated');

  return (
    <Row className="result-panel">
      <Tabs defaultActiveKey="1" className="tabs-result" tabBarExtraContent={resultOperations}>
        <TabPane
          tab={
            <span>
              <BarChartOutlined />
              {uiContext.figure}
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
            <PlotlyViewer
              responsiveKey={responsiveKey}
              dataSources={dataSources}
              dataSourceOptions={dataSourceOptions}
              plotlyId={charts[0]}
              key={charts[0]}
              mode={plotlyEditorMode}
            ></PlotlyViewer>
          </Col>
        </TabPane>
        <TabPane
          tab={
            <span>
              <SnippetsOutlined />
              {uiContext.results}
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
              {uiContext.log}
            </span>
          }
          key="3"
        >
          <LogViewer height="530px" url={logLink} />
        </TabPane>
      </Tabs>
      <Drawer
        title="Chart Store"
        placement="right"
        closable
        width="70%"
        onClose={() => {
          setChartsVisible(false);
        }}
        visible={chartsVisible}
      >
        <ChartList
          onClickItem={(chart) => {
            onClickItem(chart);
            setChartsVisible(false);
          }}
        ></ChartList>
      </Drawer>
    </Row>
  );
};

export default memo(ResultPanel);
