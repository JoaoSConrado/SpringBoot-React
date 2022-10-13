/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import './Localidade.css'

import sp from '../../images/sp.jpg'
import rj from '../../images/rj.jpg'
import df from '../../images/df.jpg'
 
import {FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaFax} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {BsTelephoneFill} from 'react-icons/bs'

function Localidade() {

    return (
        <>

            <div className="cardLocalidade">
                <div className="cardLocalidadeSp">
                    <h3 className="tituloCardLocalidade">São Paulo</h3>
                    <img src={sp} />
                    <div className="texto">
                        <p>
                            Rua Capitão Antônio Rosa, 376 - 12º andar <br/>
                            CEP: 01443-900 - São Paulo - SP <br/>
                            <br/>
                            <MdEmail/> magna@magnasistemas.com.br<br/>
                            <BsTelephoneFill/> +55 (11) 3069-2112<br/>
                            <FaFax/> +55 (11) 3069-2116<br/>
                        </p>
                    </div>  

                    <div className="redesSociaisSp">
                        <a href="https://www.facebook.com/MagnaSistemas" target="_blank"> <FaFacebookSquare className="clik" /></a>
                        <a href="https://twitter.com/magnasistemasbr" target="_blank"> <FaTwitterSquare className="clik" /></a> 
                        <a href="https://www.linkedin.com/company/magna-sistemas/" target="_blank"> <FaLinkedin className="clik" /></a> 
                        <a href="https://www.instagram.com/magna_sistemas/" target="_blank"> <FaInstagramSquare className="clik" /></a>  
                    </div>                
                </div>

                <div className="cardLocalidadeRj">
                    <h3 className="tituloCardLocalidade">Rio de Janeiro</h3>
                    <img src={rj} />
                    <div className="texto">
                        <p>
                            Avenida Rio Branco, 26 - Pav. 1 - Sala 18 <br/>
                            CEP: 20090-001 - Rio de Janeiro - RJ <br/>
                            <br/>
                            <MdEmail/> magna@magnasistemas.com.br<br/>
                            <BsTelephoneFill/> +55 (21) 3541-0343<br/>
                            <br/>
        
                        </p>
                    </div>  

                    <div className="redesSociaisRj">
                        <a href="https://www.facebook.com/MagnaSistemas" target="_blank"> <FaFacebookSquare className="clik" /></a>
                        <a href="https://twitter.com/magnasistemasbr" target="_blank"> <FaTwitterSquare className="clik" /></a> 
                        <a href="https://www.linkedin.com/company/magna-sistemas/" target="_blank"> <FaLinkedin className="clik" /></a> 
                        <a href="https://www.instagram.com/magna_sistemas/" target="_blank"> <FaInstagramSquare className="clik" /></a>  
                    </div>
                </div>

                <div className="cardLocalidadeDf">
                    <h3 className="tituloCardLocalidade">Brasília</h3>
                    <img src={df} />
                    <div className="texto">
                        <p>
                            SHN - Quadra 02, Bloco F <br/>
                            5º andar - Salas 521 a 523 <br/>
                            CEP: 70702-906 - Brasília - DF<br/>
                            <br/>
                            <MdEmail/>  magna@magnasistemas.com.br<br/>
                            <BsTelephoneFill/> +55 (61) 3327-6687<br/>
                        </p>
                    </div>  

                    <div className="redesSociaisDf">
                        <a href="https://www.facebook.com/MagnaSistemas" target="_blank"> <FaFacebookSquare className="clik" /></a>
                        <a href="https://twitter.com/magnasistemasbr" target="_blank"> <FaTwitterSquare className="clik" /></a> 
                        <a href="https://www.linkedin.com/company/magna-sistemas/" target="_blank"> <FaLinkedin className="clik" /></a> 
                        <a href="https://www.instagram.com/magna_sistemas/" target="_blank"> <FaInstagramSquare className="clik" /></a>   
                    </div>
                </div>
            </div>
            .
        </>
    )
}

export default Localidade;