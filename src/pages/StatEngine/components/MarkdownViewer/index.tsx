import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import React, { useState, useEffect, memo } from 'react';
import { fetchMarkdown } from './service';
import './index.less';
import { Empty } from 'antd';

const gfm = require('remark-gfm');

export type MarkdownProps = {
  url: string;
};

const MarkdownViewer: React.FC<MarkdownProps> = (props) => {
  const { url } = props;

  const [markdown, setMarkdown] = useState<string | null>(null);

  useEffect(() => {
    if (url) {
      fetchMarkdown(url).then((response) => setMarkdown(response || null));
    }
  }, [url]);

  console.log('MarkdownViewer: updated');

  return markdown ? (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      className="markdown-viewer"
      remarkPlugins={[gfm]}
      children={markdown}
    />
  ) : (
    <Empty />
  );
};

export default memo(MarkdownViewer);
