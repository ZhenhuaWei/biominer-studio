import * as React from 'react';
import { getLocale } from 'umi';
import * as plotly from 'plotly.js/dist/plotly';
import PlotlyChart from 'react-plotly.js';
import PlotlyEditor from 'react-chart-editor';

import * as localeDictionary from 'plotly.js/lib/locales/zh-cn';
import { PlotlyEditorState, Data, Layout, Frames } from './data';
import { getPlotlyData, getDataResults } from '@/services/ant-design-pro/api';

import 'react-chart-editor/lib/react-chart-editor.css';
import './index.less';

export interface ChartEditorProps {
  dataLink: string;
  plotlyLink: string;
  handleUpdate?: (state: PlotlyEditorState) => void;
  mode?: string;
}

export interface ChartEditorState {
  data: Data;
  layout: Layout;
  frames: Frames;
  dataSources: object;
  dataSourceOptions: object[];
}

export default class ChartEditor extends React.PureComponent<ChartEditorProps, ChartEditorState> {
  constructor(props: ChartEditorProps) {
    super(props);
    const initialState: ChartEditorState = {
      data: [],
      layout: {},
      frames: [],
      dataSources: {},
      dataSourceOptions: [],
    };
    // TODO: Remove after upgrading to React 16.3
    this.state = initialState;
  }

  componentWillMount() {
    getPlotlyData('fig1', {}).then((response) => {
      this.setState({
        data: response.data,
        layout: response.layout,
        frames: response.frames,
      });
    });

    getDataResults('fig1', {}).then((response) => {
      this.setState({
        dataSources: response,
        dataSourceOptions: Object.keys(response).map((name) => ({
          value: name,
          label: name,
        })),
      });
    });
  }

  handleUpdate = (data: Data, layout: Layout, frames: Frames) => {
    this.setState(() => ({
      data,
      layout,
      frames,
    }));
    if (this.props.handleUpdate) {
      this.props.handleUpdate({ data, layout, frames });
    }
  };

  handleRender = (data: Data, layout: Layout, frames: Frames) => {
    if (this.props.handleUpdate) {
      this.props.handleUpdate({ data, layout, frames });
    }
  };

  handleResize = () => {
    if (this.ref.state.graphDiv instanceof HTMLElement)
      plotly.Plots.resize(this.ref.state.graphDiv);
  };

  render() {
    const { data, layout, frames, dataSources, dataSourceOptions } = this.state;
    const config = {
      toImageButtonOptions: {
        format: 'svg', // one of png, svg, jpeg, webp
        filename: 'custom_image',
        height: 1000,
        width: 1000,
        scale: 1, // Multiply title/legend/axis/canvas sizes by this factor
      },
      editable: true,
      scrollZoom: false,
      displaylogo: false,
      displayModeBar: true,
      showTips: false,
      responsive: true,
      // @ts-ignore
      locales: { 'zh-CN': localeDictionary },
      locale: getLocale(),
    };

    console.log('PlotlyViewer updated: ', this.props.mode);

    // mode: ["Plotly", "PlotlyEditor"]
    return this.props.mode === 'Plotly' ? (
      <PlotlyChart
        ref={(plotlyRef: PlotlyEditor) => {
          this.ref = plotlyRef;
        }}
        useResizeHandler
        className="plotly-viewer"
        data={data}
        layout={layout}
        config={config}
      />
    ) : (
      <div className="plotly-viewer">
        <PlotlyEditor
          ref={(ref: PlotlyEditor) => {
            this.ref = ref;
          }}
          data={data}
          layout={layout}
          config={config}
          frames={frames}
          plotly={plotly}
          dataSources={dataSources}
          dataSourceOptions={dataSourceOptions}
          onUpdate={this.handleUpdate}
          onRender={this.handleRender}
          useResizeHandler
          debug
          advancedTraceTypeSelector
        />
      </div>
    );
  }

  ref: PlotlyEditor;
}
