import React from 'react';

import Logo from '../../images/logo.png';
import { SideBarNav,
        ListItem,
        ListItems,
        Image,
        Link,
        Copyright} from './styled'; 



export default function SideBar(){
  return(
    <SideBarNav>
      <Image src={Logo} alt="Logo"/>
      <ListItems>
        <ListItem>
          <Link href="#home">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="#empreendimento">O Empreendimento</Link>
        </ListItem>
        <ListItem>
          <Link href="#plantas">Plantas</Link>
        </ListItem>
        <ListItem>
          <Link href="#local">Localização</Link>
        </ListItem>
        <ListItem>
          <Link href="#contatos">Contatos</Link>
        </ListItem>
      </ListItems>
      <Copyright>Políticas de<br/>privacidade</Copyright>
    </SideBarNav>
    

  );
}