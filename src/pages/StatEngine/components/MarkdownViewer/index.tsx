import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import React, { useState, useEffect } from 'react';
import { fetchMarkdown } from './service';
import './index.less';

const gfm = require('remark-gfm');

export type MarkdownProps = {
  url: string;
};

const MarkdownViewer: React.FC<MarkdownProps> = (props) => {
  const { url } = props;

  const [markdown, setMarkdown] = useState<string>('No Content.');

  useEffect(() => {
    fetchMarkdown(url).then((response) => setMarkdown(response || 'No content.'));
  }, []);

  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      className="markdown-viewer"
      remarkPlugins={[gfm]}
      children={markdown}
    />
  );
};

export default MarkdownViewer;
