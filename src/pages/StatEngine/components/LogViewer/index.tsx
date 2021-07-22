import { LazyLog } from 'react-lazylog';

export type LogProps = {
  url: string;
  height: string;
};

const LogViewer: React.FC<LogProps> = (props) => {
  const { url, height } = props;

  return <LazyLog height={height} url={url} enableSearch extraLines={1} follow />;
};

export default LogViewer;
