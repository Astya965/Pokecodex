import React from 'react';
import { ReloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import './ErrorPage.scss';

type TErrorPageProps = {
  text: string;
  onReload: () => void;
};

const ErrorPage = ({ text, onReload }: TErrorPageProps) => (
  <div className="errorWrapper">
    <h3 className="errorInfo">{text}</h3>
    <Button
      onClick={() => onReload()}
      className="reloadButton"
      icon={<ReloadOutlined />}
    >
      Reload list
    </Button>
  </div>
);

export default ErrorPage;
