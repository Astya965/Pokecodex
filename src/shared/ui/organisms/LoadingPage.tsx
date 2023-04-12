import React from 'react';
import Spin from 'antd/es/spin';

import './LoadingPage.scss';

const LoadingPage = () => (
  <div className="loadingWrapper">
    <Spin className="spinner" tip="Loading" size="large" />
  </div>
);

export default LoadingPage;
