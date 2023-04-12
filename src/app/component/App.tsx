import React, { useEffect } from 'react';
import { Breadcrumb, Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Logo from '../ui/atoms/Logo';
import '../styles/reset.scss';
import './App.scss';
import Info from '../ui/atoms/Info';
import Inner from '../ui/molecules/Inner';
import { Route, Routes, useParams } from 'react-router-dom';
import PokemonListPage from '../../pages/list/PokemonListPage';
import NotFoundPage from '../../pages/notfound/NotFoundPage';
import PokemonInfoPage from '../../pages/pokemonInfo/PokemonInfoPage';

const App = () => (
  <Layout className="app">
    <Header className="header">
      <Logo />
    </Header>
    <Content className="content">
      <Info>It`s simple application with the list of pokemons.</Info>
      <Inner>
        <Routes>
          <Route path="/pokemon/:id" element={<PokemonInfoPage />} />
          <Route path="/" element={<PokemonListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Inner>
    </Content>
  </Layout>
);

export default App;
