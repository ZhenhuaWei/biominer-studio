import React, { useState, useEffect, memo } from 'react';
import { List, Space, Tag } from 'antd';
import { filter, map } from 'lodash';
import { LikeOutlined, DislikeOutlined, FunctionOutlined } from '@ant-design/icons';

// API Endpoint
import { getCharts } from '@/services/biominer/api';

import { ChartMetaData, Icon } from './data';
import './index.less';

export type ChartListProps = {
  onClickItem?: (chart: ChartMetaData) => void;
};

const ChartList: React.FC<ChartListProps> = (props) => {
  const { onClickItem } = props;

  const [charts, setCharts] = useState<ChartMetaData[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    getCharts({}).then((response) => {
      const chartList = filter(response.data, (item) => {
        return item.category === 'Chart';
      });

      const updatedCharts = map(chartList, (item) => {
        return {
          ...item,
          shortName: item.short_name,
        };
      });

      setCharts(updatedCharts);
      setTotal(updatedCharts.length);
    });
  }, []);

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const showTotal = (num: number) => {
    return `Total ${num} items`;
  };

  const getLogo = (icons: Icon[]): string => {
    return icons[0].src;
  };

  const titleLink = (name: string, version: string) => {
    return <a className="title">{`${name}- ${version}`}</a>;
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
        showTotal,
        showSizeChanger: true,
        showQuickJumper: true,
      }}
      dataSource={charts}
      renderItem={(item) => (
        <List.Item
          className="chart-item"
          onClick={() => {
            if (onClickItem) {
              onClickItem(item);
            }
          }}
          key={item.shortName}
          actions={[
            <IconText icon={LikeOutlined} text="156" key="list-vertical-star-o" />,
            <IconText icon={DislikeOutlined} text="1" key="list-vertical-like-o" />,
            <IconText icon={FunctionOutlined} text="2" key="list-vertical-message" />,
          ]}
          extra={<img alt="logo" src={getLogo(item.icons)} />}
        >
          <List.Item.Meta
            title={titleLink(item.name, item.version)}
            description={item.maintainer}
          />
          <span className="description">{item.description}</span>
          {item.tags.map((tag) => {
            return <Tag key={tag}>{tag}</Tag>;
          })}
        </List.Item>
      )}
    />
  );
};

export default memo(ChartList);
