import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Logo from '../ui/atoms/Logo';
import '../styles/reset.scss';
import './App.scss';
import Info from '../ui/atoms/Info';
import Inner from '../ui/molecules/Inner';
import { Route, Routes } from 'react-router-dom';
import PokemonListPage from '../../pages/list/PokemonListPage';
import NotFoundPage from '../../pages/notfound/NotFoundPage';

const App = () => {
  const breadcrumb = [
    {
      title: 'List',
    },
  ];

  return (
    <Layout className="app">
      <Header className="header">
        <Logo />
      </Header>
      <Content className="content">
        <Info>It`s simple application with the list of pokemons.</Info>
        <Breadcrumb className="breadcrumb" items={breadcrumb} />
        <Inner>
          <Routes>
            <Route  path="/" element={<PokemonListPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Inner>
      </Content>
    </Layout>
  );
};

export default App;
