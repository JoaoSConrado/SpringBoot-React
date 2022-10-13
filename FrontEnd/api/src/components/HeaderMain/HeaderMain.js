/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './HeaderMain.css'

import LogoMagna from '../../images/LogoMagna.png'

function HeaderMain() {
    return(

        <header>

            <div className='container'>
                <div >
                    <img className='logo' src={LogoMagna} />
                </div>

                <div className='botoes-header-cta'>
                    <button className='button-header1'> Login </button>
                    <button className='button-header2'> Cadastre-se </button>
                </div>
            </div>

        </header>

    );
}

export default HeaderMain;