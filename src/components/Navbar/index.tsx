import React, { useState } from "react";
import { Container, Logo, Options, Button } from "./style";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [navControl, setNavControl] = useState<Boolean>(false);

  function OpenOptions() {
    if (!navControl) {
      setNavControl(true);
    } else setNavControl(false);
  }

  console.log(navControl);
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo clinica rebeca vaz" />
      </Logo>
      <Button>
        <input onClick={OpenOptions} type="checkbox" id="checkbox-menu" />
        <label htmlFor="checkbox-menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </Button>
      <Options className={navControl && "active"}>
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
