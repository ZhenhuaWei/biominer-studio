import { LazyLog } from 'react-lazylog';
import { Space, Col, Button } from 'antd';
import { DownloadOutlined, SyncOutlined } from '@ant-design/icons';

export type LogProps = {
  url: string;
  height: string;
};

const LogViewer: React.FC<LogProps> = (props) => {
  const { url, height } = props;

  const buttons = (
    <Space style={{ marginTop: '5px', display: 'flex', justifyContent: 'flex-end' }}>
      <Button icon={<SyncOutlined />}>Force Update</Button>
      <Button icon={<DownloadOutlined />}>Download</Button>
    </Space>
  );

  return (
    <Col>
      <LazyLog height={height} url={url} enableSearch extraLines={1} follow />
      {buttons}
    </Col>
  );
};

export default LogViewer;
