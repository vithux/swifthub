import React from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './Menu.css'
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Swift Hub Logo" />
            </Link>

            <Button to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
