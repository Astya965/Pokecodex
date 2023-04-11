import React from 'react';
import './Inner.scss';

const Inner = ({ children }: { children: React.ReactNode }) => (
  <div className="inner">{children}</div>
);

export default Inner;
