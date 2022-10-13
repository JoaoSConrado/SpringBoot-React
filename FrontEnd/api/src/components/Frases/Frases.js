/* eslint-disable jsx-a11y/alt-text */
import './fraseLandingPage.css'

import aspasLanding from '../../images/aspasLanding.png'

export function FraseLandingPageMissao() {
    return (
        <>

            <section className='section-frase-landing'>
                <h1 className='frase-landing'> <span className='fraseSpan'>MISSÃO:</span> <br /> Atender o mercado corporativo com <br />
                soluções inovadoras e efetivas de alto <br /> valor agregado e excelência em <br /> <span className='fraseSpan2'>qualidade, custo e prazo</span>.</h1>

                <div className='div-aspas-frase-landing'>
                    <img className='imagem-aspas-frase-landing' src={aspasLanding} />
                </div>
            </section>



        </>

    )
}

export function FraseLandingPageVisao() {
    return (
        <>

            <section className='section-frase-landing'>
                <h1 className='frase-landing'> <span className='fraseSpan'>VISÃO:</span> <br /> Ser reconhecida pela <span className='fraseSpan2'>excelência</span> <br /> de suas soluções e serviços, 
                reconhecida <br /> como a <span className='fraseSpan2'>melhor opção</span> por clientes, <br />colaboradores e parceiros.</h1>

                <div className='div-aspas-frase-landing'>
                    <img className='imagem-aspas-frase-landing' src={aspasLanding} />
                </div>
            </section>



        </>

    )
}

export function FraseLandingPageValores() {
    return (
        <>

            <section className='section-frase-landing'>
                <h1 className='frase-landing'> <span className='fraseSpan'>VALORES:</span> <br /> Comprometimento, Superação na <br />
                 entrega dos resultados, Responsabilidade, <br /> Colaboração e respeito mútuo.</h1>

                <div className='div-aspas-frase-landing'>
                    <img className='imagem-aspas-frase-landing' src={aspasLanding} />
                </div>
            </section>



        </>

    )
}