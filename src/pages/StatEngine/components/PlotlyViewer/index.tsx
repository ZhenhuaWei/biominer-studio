import * as React from 'react';
import * as plotly from 'plotly.js/dist/plotly';
import PlotlyChart from 'react-plotly.js';
import PlotlyEditor from 'react-chart-editor';
import 'react-chart-editor/lib/react-chart-editor.css';
import './index.less';

export interface IGraphDivData {
  [key: string]: any;
}

export type Data = IGraphDivData[];

export type Layout = {};

export type Frames = any[];

export interface PlotlyEditorState {
  data: Data;
  layout: Layout;
  frames?: Frames;
}

export interface ChartEditorProps {
  state?: PlotlyEditorState;
  handleUpdate?: (state: PlotlyEditorState) => void;
  mode?: string;
}

export interface ChartEditorState {
  data: Data;
  layout: Layout;
  frames: Frames;
}

export default class ChartEditor extends React.Component<ChartEditorProps, ChartEditorState> {
  constructor(props: ChartEditorProps) {
    super(props);
    const initialState: ChartEditorState = {
      data: props.state ? props.state.data || [] : [],
      layout: props.state ? props.state.layout || {} : {},
      frames: props.state ? props.state.frames || [] : [],
    };
    // TODO: Remove after upgrading to React 16.3
    this.state = initialState;
  }

  static getDerivedStateFromProps(nextProps: ChartEditorProps, prevState?: ChartEditorState) {
    return prevState;
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
    const { data, layout, frames } = this.state;
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
    };
    console.log('Mode: ', this.props.mode);

    // mode: ["Plotly", "PlotlyEditor"]
    return this.props.mode === 'Plotly' ? (
      <PlotlyChart
        ref={(plotlyRef) => {
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
