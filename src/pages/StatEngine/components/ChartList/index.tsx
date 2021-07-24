import React, { memo } from 'react';
import { List, Space, Tag } from 'antd';
import { LikeOutlined, DislikeOutlined, FunctionOutlined } from '@ant-design/icons';
import { ChartData } from './data';
import './index.less';

export type ChartListProps = {
  charts: ChartData[];
  total: number;
  onClickItem?: (chart: ChartData) => void;
};

const ChartList: React.FC<ChartListProps> = (props) => {
  const { charts, total, onClickItem } = props;

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  // const showTotal = (num: number) => {
  //   return `Total ${num} items`;
  // };

  const titleLink = (title: string, version: string) => {
    return <a className="title">{`${title}- ${version}`}</a>;
  };

  console.log('ChartList updated');

  return (
    <List
      className="chart-list"
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
        total,
        showSizeChanger: true,
        showQuickJumper: true,
      }}
      dataSource={charts}
      renderItem={(item) => (
        <List.Item
          onClick={() => {
            if (onClickItem) {
              onClickItem(item);
            }
          }}
          key={item.id}
          actions={[
            <IconText icon={LikeOutlined} text="156" key="list-vertical-star-o" />,
            <IconText icon={DislikeOutlined} text="1" key="list-vertical-like-o" />,
            <IconText icon={FunctionOutlined} text="2" key="list-vertical-message" />,
          ]}
          extra={<img width={272} alt="logo" src={item.logo} />}
        >
          <List.Item.Meta
            title={titleLink(item.title, item.version)}
            description={item.maintainer}
          />
          {item.description}
          {item.tags.map((tag) => {
            return <Tag>{tag}</Tag>;
          })}
        </List.Item>
      )}
    />
  );
};

export default memo(ChartList);
