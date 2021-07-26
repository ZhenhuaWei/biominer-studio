import { useIntl } from 'umi';
import { GridContent } from '@ant-design/pro-layout';
import { Col, Row, Tabs, Space, Button, Tooltip, Drawer, Modal } from 'antd';
import type { ProFormColumnsType } from '@ant-design/pro-form';
import Draggable from 'react-draggable';

import {
  EditOutlined,
  InfoCircleOutlined,
  StopOutlined,
  DatabaseOutlined,
  BarChartOutlined,
  ContainerOutlined,
  SnippetsOutlined,
  HistoryOutlined,
  IssuesCloseOutlined,
  FullscreenExitOutlined,
} from '@ant-design/icons';
import React, { useState, useEffect, useCallback } from 'react';
import './index.less';

// Custom Component
import MarkdownViewer from './components/MarkdownViewer';
import LogViewer from './components/LogViewer';
import Resizer from './components/Resizer';
import ArgumentForm from './components/ArgumentForm';
import PlotlyViewer from './components/PlotlyViewer/indexClass';
import ChartList from './components/ChartList';
import ImportForm from './components/ImportForm';
import DataTable from './components/DataTable';

// Custom DataType
import { Bound } from './data';
import { DataLoader } from './components/Common/data';
import { DataKey, ChartData, DataItem } from './components/ChartList/data';

// Custom Data
import { langData } from './lang';

const logExample = 'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/test.log';

const { TabPane } = Tabs;

const StatEngine: React.FC = () => {
  const [leftSpan, setLeftSpan] = useState<number>(12);
  const [plotlyEditorMode, setPlotlyEditorMode] = useState<string>('Plotly');
  const [chartsVisible, setChartsVisible] = useState<boolean>(false);
  const [resizeBtnActive, setResizeBtnActive] = useState<boolean>(false);
  const [currentActiveKey, setCurrentActiveKey] = useState<string>('summary');

  const [inDataContext, setInDataContext] = useState<boolean>(false);

  // Chart
  // const [currentChart, setCurrentChart] = useState<ChartData | null>(null);
  const [currentChart] = useState<ChartData | null>(null);
  const [markdownLink, setMarkdownLink] = useState<string>('');
  const [argumentColumns, setArgumentColumns] = useState<ProFormColumnsType<DataItem>[]>([]);
  const [dataKey, setDataKey] = useState<DataKey>({
    annoData: 'Anno Data',
    data: 'Data',
  });

  // Data & Anno Data
  const [data, setData] = useState<any[][]>([]);
  const [annoData, setAnnoData] = useState<any[][]>([]);
  const [dataLoader, setDataLoader] = useState<{ [key: string]: DataLoader }>({});

  const [logLink, setLogLink] = useState<string>(logExample);

  // Modal
  const [modalDisabled, setModalDisabled] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [bounds, setBounds] = useState<Bound>({ left: 0, top: 0, bottom: 0, right: 0 });
  const draggleRef: React.RefObject<HTMLDivElement> = React.createRef();

  const onModalStart = (event: any, uiData: any) => {
    const { clientWidth, clientHeight } = window?.document?.documentElement;
    const targetRect = draggleRef?.current?.getBoundingClientRect();
    if (targetRect) {
      setBounds({
        left: -targetRect?.left + uiData?.x,
        right: clientWidth - (targetRect?.right - uiData?.x),
        top: -targetRect?.top + uiData?.y,
        bottom: clientHeight - (targetRect?.bottom - uiData?.y),
      });
    }
  };

  const onLoadData = (loader: DataLoader) => {
    const currentDataLoader = {};
    currentDataLoader[currentActiveKey] = { ...dataLoader[currentActiveKey], ...loader };
    setDataLoader({ ...dataLoader, ...currentDataLoader });
    // Close the modal
    setModalVisible(false);
  };

  const selectItem = useCallback(
    (chart: ChartData) => {
      // setCurrentChart(chart);
      // README
      setMarkdownLink(chart.readme);
      // Reset Argument
      setArgumentColumns(chart.fields);
      // Reset DataKey
      setDataKey(chart.dataKey);
      // Reset Log Container
      setLogLink('');
      // Close Charts Drawer
      setChartsVisible(false);
    },
    [currentChart],
  );

  const isInDataContext = (key: string) => {
    return ['data', 'annoData'].includes(key) || false;
  };

  const changeDataTab = (key: string) => {
    if (key !== 'arguments') {
      setInDataContext(isInDataContext(key));
    }

    setCurrentActiveKey(key);
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
      <Button
        disabled={!inDataContext}
        onClick={() => {
          setModalVisible(true);
        }}
        icon={<ContainerOutlined />}
      >
        {uiContext.loadData}
      </Button>
    </Space>
  );

  const updateData = useCallback(
    (key: string, tableData: any[][], tableHeader: string[]) => {
      if (key === 'data') {
        setData([tableHeader].concat(tableData));
      }

      if (key === 'annoData') {
        setAnnoData([tableHeader].concat(tableData));
      }
    },
    [dataLoader],
  );

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
                onChange={(key) => {
                  changeDataTab(key);
                }}
                activeKey={currentActiveKey}
                defaultActiveKey="summary"
                className="left__tabs__arguments"
                tabBarExtraContent={summaryOperations}
              >
                <TabPane
                  tab={
                    <span>
                      <InfoCircleOutlined />
                      {uiContext.summary}
                    </span>
                  }
                  key="summary"
                >
                  <MarkdownViewer url={markdownLink} />
                </TabPane>
                <TabPane tab={<span>Data</span>} key="data">
                  <DataTable
                    dataKey="data"
                    updateData={updateData}
                    dataLoader={dataLoader['data']}
                    height="calc(100vh - 145px)"
                    width="100%"
                  ></DataTable>
                </TabPane>
                {dataKey['annoData'] ? (
                  <TabPane tab={<span>Anno Data</span>} key="annoData">
                    <DataTable
                      dataKey="annoData"
                      updateData={updateData}
                      dataLoader={dataLoader['annoData']}
                      height="calc(100vh - 145px)"
                      width="100%"
                    ></DataTable>
                  </TabPane>
                ) : null}
                <TabPane tab={<span>{uiContext.arguments}</span>} key="arguments">
                  <ArgumentForm
                    layout="vertical"
                    height="calc(100% - 62px)"
                    columns={argumentColumns}
                  ></ArgumentForm>
                </TabPane>
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
                      dataLink="fig1"
                      plotlyLink="fig1"
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
                  <LogViewer height="530" url={logLink} />
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Col>
      </Row>
      <Drawer
        title="Chart Store"
        placement="right"
        closable
        width="50%"
        onClose={() => {
          setChartsVisible(false);
        }}
        visible={chartsVisible}
      >
        <ChartList onClickItem={selectItem}></ChartList>
      </Drawer>
      <Modal
        className="import-form-modal"
        width="50%"
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (modalDisabled) {
                setModalDisabled(false);
              }
            }}
            onMouseOut={() => {
              setModalDisabled(true);
            }}
            // fix eslintjsx-a11y/mouse-events-have-key-events
            // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
            onFocus={() => {}}
            onBlur={() => {}}
            // end
          >
            Data Loader
          </div>
        }
        visible={modalVisible}
        footer={null}
        onCancel={() => {
          setModalVisible(false);
        }}
        modalRender={(modal) => (
          <Draggable
            disabled={modalDisabled}
            bounds={bounds}
            onStart={(event, uiData) => onModalStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <ImportForm onLoad={onLoadData}></ImportForm>
      </Modal>
    </GridContent>
  );
};

export default StatEngine;
