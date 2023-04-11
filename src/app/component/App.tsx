import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Logo from '../ui/atoms/Logo';
import '../styles/reset.scss';
import './App.scss';
import Info from '../ui/atoms/Info';
import Inner from '../ui/molecules/Inner';
import PokemonList from '../../features/pokemonList';

const App = () => {
  const breadcrumb = [
    {
      title: 'List',
    },
  ];

  const test = [
    {
      id: 1,
      name: 'bulbasaur',
      types: ['grass', 'poison'],
      stats: new Map<string, number>([
        ['hp', 45],
        ['attack', 48],
        ['defense', 49],
        ['special-attack', 80],
        ['special-defense', 65],
        ['speed', 40],
      ]),
    },
    {
      id: 8,
      name: 'wartortle',
      types: ['water'],
      stats: new Map<string, number>([
        ['hp', 45],
        ['attack', 48],
        ['defense', 49],
        ['special-attack', 80],
        ['special-defense', 65],
        ['speed', 40],
      ]),
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
          <PokemonList pokemonList={test} />
        </Inner>
      </Content>
    </Layout>
  );
};

export default App;
