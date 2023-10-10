import React from 'react';
import { Main } from './styled';
import SideBar from './components/sidebar/index.js';
import Pages from './pages/index.js';




export default function App (){
  return (
    <Main>
      <SideBar/>
      <Pages/>
    </Main>
  );
}