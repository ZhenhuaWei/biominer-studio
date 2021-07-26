import React, { useState, useEffect, memo } from 'react';
import { getLocale } from 'umi';
import * as plotly from 'plotly.js/dist/plotly';
import PlotlyChart from 'react-plotly.js';
import PlotlyEditor from 'react-chart-editor';
import { getPlotlyData } from '@/services/ant-design-pro/api';

import * as localeDictionary from 'plotly.js/lib/locales/zh-cn';
import { PlotlyEditorState, Data, Layout, Frames } from './data';

import 'react-chart-editor/lib/react-chart-editor.css';
import './index.less';

export type PlotlyViewerProps = {
  dataSource?: string;
  handleUpdate?: (state: PlotlyEditorState) => void;
  mode?: string;
};

const PlotlyViewer: React.FC<PlotlyViewerProps> = (props) => {
  const { dataSource, handleUpdate, mode } = props;

  const [data, setData] = useState<Data>([]);
  const [layout, setLayout] = useState<Layout>({});
  const [frames, setFrames] = useState<Frames>([]);
  const [ref, setRef] = useState<PlotlyEditor>();

  const onUpdate = (newData: Data, newLayout: Layout, newFrames: Frames) => {
    if (handleUpdate) {
      handleUpdate({ data: newData, layout: newLayout, frames: newFrames });
    }
  };

  const onRender = (newData: Data, newLayout: Layout, newFrames: Frames) => {
    if (handleUpdate) {
      handleUpdate({ data: newData, layout: newLayout, frames: newFrames });
    }
  };

  useEffect(() => {
    if (dataSource) {
      getPlotlyData('fig1', {}).then((response) => {
        setData(response.data);
        setLayout(response.layout);
        setFrames(response.frames);
      });
    }
  }, [dataSource]);

  const handleResize = () => {
    if (ref.state.graphDiv instanceof HTMLElement) plotly.Plots.resize(ref.state.graphDiv);
  };

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

  console.log('PlotlyViewer updated: ', mode);

  // mode: ["Plotly", "PlotlyEditor"]
  return mode === 'Plotly' ? (
    <PlotlyChart
      ref={(plotlyRef: PlotlyEditor) => {
        setRef(plotlyRef);
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
        ref={(plotlyRef: PlotlyEditor) => {
          setRef(plotlyRef);
        }}
        data={data}
        layout={layout}
        config={config}
        frames={frames}
        plotly={plotly}
        onUpdate={onUpdate}
        onRender={onRender}
        useResizeHandler
        debug
        advancedTraceTypeSelector
      />
    </div>
  );
};

export default memo(PlotlyViewer);
