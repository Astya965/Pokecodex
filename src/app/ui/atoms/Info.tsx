import React from 'react';
import './Info.scss';

const Info = ({ children }: { children: string }) => (
  <div className="info">{children}</div>
);

export default Info;
