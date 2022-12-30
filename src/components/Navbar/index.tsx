import { Container, Logo, Options, Button } from "./style";
import logo from "../../assets/logo.png";
import React, { useState } from "react";

//const [navControl, setNavControl] = useState<any>("");

function OpenOptions() {
  //setNavControl(true);
}

//console.log(navControl);
export default function Navbar() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo clinica rebeca vaz" />
      </Logo>
      <Button onClick={OpenOptions}>x</Button>
      <Options>
        <li>
          <a href="#Inicio">Inicio</a>
        </li>
        <li>
          <a href="#Sobre">Sobre Nós</a>
        </li>
        <li>
          <a href="#Depoimentos">Depoimentos</a>
        </li>
        <li>
          <a href="#Servicos">Serviços</a>
        </li>
        <li>
          <a href="#Footer">Footer</a>
        </li>
      </Options>
    </Container>
  );
}
