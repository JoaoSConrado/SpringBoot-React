/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import './Cta.css'
import CtaInicio from '../../images/cta.png'
import { Link } from 'react-router-dom';

function Cta() {

    return (
        <>
            <main className='main-landing'>
                <section className='section-cta'>

                

                    <div className='div-cta'>
                        <h1 className='titulo-cta'>NA JORNADA DA  <br/> <span className='span-titulo-cta'>TRANSFORMAÇÃO</span> DIGITAL  <br/> </h1>
                        <h1 className='subtitulo-cta'> É PRECISO IR ALÉM DA INOVAÇÃO </h1>
                        <div className='div-button-cta'>
                            <Link to="/post">
                                <button className='button-cta'>ADQUIRA SEU SOFTWARE</button> 
                            </Link>
                            <a href="https://www.magnasistemas.com.br/wps/portal/internet" target="_blank"><button className='button-cta2'>CONHEÇA A MAGNA SISTEMAS</button></a>
                        </div>
                    </div>

                    <div className='div-imagem-cta'>
                        <img src={CtaInicio} />
                    </div>

                    

                </section>
            </main>
        </>
        
    )
}

export default Cta;