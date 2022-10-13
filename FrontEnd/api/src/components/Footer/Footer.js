/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import { useEffect, useState } from 'react'

import scrollTop2 from '../../images/scrollTop2.svg'

import './Footer.css'

function Footer() {

    return (
        <>
            <div className="footer"> 
                <h6 className="footerText">1996-2021 ©Magna Sistemas Consultoria S.A. - Todos os direitos reservados</h6>
                <a href="https://www.magnasistemas.com.br/wps/portal/internet/politica-privacidade" target="_blank" className="footerBtn">Política de Privacidade</a>
            </div>
        </>
    )

}

export default Footer;

export function VoltarTopo() {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 600) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            <div>
                {backToTopButton && (
                    <img style={{
                        position: "fixed",
                        bottom: "70px",
                        right: "20px",
                        cursor: "pointer"
                    }} onClick={scrollUp} className='imgVoltarTopo' src={scrollTop2} />
                )}

            </div>

        </>




    )
}