/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Header.css'

import {Link} from 'react-router-dom'

import LogoMagna from '../../images/LogoMagna.png'
import Voltar from '../../images/Group.png'

function Header() {
    return(

        <header>

            <div className='container'>
                <div className='logo'>
                    <img src={LogoMagna} />
                </div>

                <div>
                    
                    <Link to="/">
                        <img className='voltar'  src={Voltar} style={{width: '50px'}} />
                    </Link>

                </div>
            </div>

        </header>

    );
}

export default Header;