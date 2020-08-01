import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
// import ButtonLink from '../ButtonLink/botaoProps'
import './estilo.css'
import Button from '../ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo" />
            </Link>

            <Button as={Link} to="/cadastro/video" className="Button">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu; // Exporta o componente