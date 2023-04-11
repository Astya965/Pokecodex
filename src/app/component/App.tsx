import React from "react";
import Checkbox from 'antd/lib/checkbox';
import "./App.scss";

export const App = () => {
  return (
    <div className="test">
      <h1>Welcome, friend!</h1>
      <Checkbox onChange={() => alert("hi!")}>I'm Checkbox</Checkbox>
    </div>
  );
};
