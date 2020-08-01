import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/logo.png'
import '../Menu/estilo.css'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={Logo} className="Logo" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado por Pedro <span className="red">K</span>ondrat
      </p>
    </FooterBase>
  );
}

export default Footer;
