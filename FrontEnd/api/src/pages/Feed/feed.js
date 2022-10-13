import React from 'react';


import HeaderMain from '../../components/HeaderMain/HeaderMain';
import Cards from '../../components/Cards/Cards';
import Cta from '../../components/CTA/Cta.js';
import { SlideComentarios } from '../../components/Slides/SlideComentarios';
import { FraseLandingPageMissao, FraseLandingPageVisao, FraseLandingPageValores } from '../../components/Frases/Frases';
import Localidade from '../../components/Localidades/Localidade';
import Footer, { VoltarTopo } from '../../components/Footer/Footer';

function Feed() {

    return (
            <div>
                <HeaderMain />
                <Cta />
                <SlideComentarios />
                <FraseLandingPageMissao/>
                <Cards />
                <FraseLandingPageVisao/>
                <Localidade />
                <FraseLandingPageValores/>
                <VoltarTopo/>
                <Footer/>
            </div>
    )
}

export default Feed;