import React from 'react';
import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import PokemonListPage from 'src/pages/list/PokemonListPage';
import NotFoundPage from 'src/pages/notfound/NotFoundPage';
import PokemonInfoPage from 'src/pages/pokemonInfo/PokemonInfoPage';

import Logo from '../ui/atoms/Logo';
import Info from '../ui/atoms/Info';
import Inner from '../ui/molecules/Inner';
import '../styles/reset.scss';
import './App.scss';

const App = () => (
  <Layout className="app">
    <Header className="header">
      <Link to="/">
        <Logo />
      </Link>
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
