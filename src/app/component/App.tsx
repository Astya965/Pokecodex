import React from 'react';
import Checkbox from 'antd/lib/checkbox';
import './App.scss';

const App = () => {
  const text = 'Welcome, friend!';

  return (
    <div className="test">
      <h1>{text}</h1>
      <Checkbox>I`m Checkbox</Checkbox>
    </div>
  );
};

export default App;
