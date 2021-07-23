import { Space, Button, Col } from 'antd';
import './index.less';

export type ResizerProps = {
  HoverHandler: (active: boolean) => void;
  ClickHandler: (span: number) => void;
  btnActive: boolean;
  style?: object;
  className?: string;
};

const Resizer: React.FC<ResizerProps> = (props) => {
  const { HoverHandler, ClickHandler, btnActive, style, className } = props;

  return (
    <Col
      style={style}
      className={`'resizer' ${className}`}
      onMouseEnter={() => {
        HoverHandler(true);
      }}
      onMouseLeave={() => {
        HoverHandler(false);
      }}
    >
      {btnActive ? (
        <Space>
          <Button
            onClick={() => {
              ClickHandler(12);
            }}
            className="resize-btn btn-1"
            size="small"
          >
            1:1
          </Button>
          <Button
            onClick={() => {
              ClickHandler(16);
            }}
            className="resize-btn btn-2"
            size="small"
          >
            2:1
          </Button>
          <Button
            onClick={() => {
              ClickHandler(8);
            }}
            className="resize-btn btn-3"
            size="small"
          >
            1:2
          </Button>
          <Button
            onClick={() => {
              ClickHandler(24);
            }}
            className="resize-btn btn-4"
            size="small"
          >
            Full
          </Button>
        </Space>
      ) : null}
    </Col>
  );
};

export default Resizer;
