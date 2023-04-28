//Styles e Assets
import './header.css';
import Logo from '../../assets/shared/logo.svg';
import Menu from '../../assets/shared/icon-hamburger.svg';
import Close from '../../assets/shared/icon-close.svg';
import { links } from '../../data/data.json';

import { useState } from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [ showMenu, setShowMenu ] = useState(false);

    return (
        <header className='header row'>
            <img src={Logo} alt="logo do site" className='header__logo' />

            <span className='header__line'></span>

            <nav className="nav">
                <div className='nav__toggle--buttons' onClick={()=> setShowMenu(!showMenu)}>
                    { !showMenu ? <img src={Menu} alt='Icone abrir menu' /> : <img src={Close} alt='Icone fechar menu' />}
                </div>

                <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list column">
                        {links.map(({name, path, position}, index) => {
                            return (
                                <li className='nav__item' key={index}>
                                    <span>{position}</span>
                                    <NavLink to={path}>{name}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                
            </nav>
            
        </header>
    )
}

export { Header };