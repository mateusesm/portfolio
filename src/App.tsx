import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ContainerApp } from './components/ContainerApp/styled';

import { HeaderApp } from './components/HeaderApp';
import { MainApp } from './components/MainApp/styled';

import { Rotas } from './routes';

import { FooterApp } from './components/FooterApp';

import axios from './utils/axios';

interface DataUser {
  avatar_url: string;
  repos_url: string;
}

function App() {
  const [dataUser, setDataUser] = useState({} as DataUser);

  useEffect(() => {
    const getGitHubData = async () => {
      const { data } = await axios('/mateusesm');
      setDataUser({ avatar_url: data.avatar_url, repos_url: data.repos_url });
    };
    getGitHubData();
  }, []);

  return (
    <ContainerApp className="container">
      <BrowserRouter>
        <HeaderApp />
        <MainApp className="main">
          <Rotas avatarUrl={dataUser.avatar_url} />
        </MainApp>
        <FooterApp />
      </BrowserRouter>
    </ContainerApp>
  );
}

export default App;
