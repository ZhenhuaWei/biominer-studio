import React, { useState, useEffect } from 'react';
import { fetchLog } from './service';
import './index.less';

export type LogProps = {
  url: string;
};

const LogViewer: React.FC<LogProps> = (props) => {
  const { url } = props;

  const [log, setLog] = useState<string>('No Content.');

  useEffect(() => {
    if (url.length > 0) {
      fetchLog(url).then((response) => setLog(response || 'No content.'));
    }
  }, [url]);

  return (
    <div
      className="log-viewer"
      dangerouslySetInnerHTML={{
        __html: log,
      }}
    ></div>
  );
};

export default LogViewer;
