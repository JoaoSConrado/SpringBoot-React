/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react';

import spring from '../../images/spring.png'
import react3 from '../../images/react3.png'
import postgre from '../../images/postgre.png'

import {
    FaTrash, FaRegEdit
  } from "react-icons/fa";
  

import { Link } from 'react-router-dom';
import axios from 'axios'

import './Cards.css'

function Cards() {

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        //function só será executada depois da renderização do componente 
        axios.get("http://localhost:8080/controle-software")
        .then((response) => {
            setPosts(response.data.content)
        }).catch(() => {
            console.log("DEU ERRADO BURRÃO!")
        })
    }, [])

    function deletePost(id) {

        axios.delete(`http://localhost:8080/controle-software/${id}`)

        setPosts(posts.filter(post => post.id !== id))

    }
    
    return (

        <>  
            <div >

                <h1 className='titleProjeto'>PROJETO REST API COM SPRING BOOT</h1>
                <span className='resumo3'>(O objetivo é que o gestor possa ter um controle sobre seus clientes e a demanda de seus softwares!)</span>

                <div className='cardTech'>
                    <p className='cardTech1'> <img className='imgCard1' src={spring}/></p>
                    <p> + </p>
                    <p className='cardTech3'> <img className='imgCard3' src={postgre}/></p>
                    <p> + </p>
                    <p className='cardTech2'> <img className='imgCard2' src={react3}/></p>
                </div>

                <p className='resumo1'>
                    Esse projeto é basicamente a construção de uma Rest API, utilizando o Framework Spring Boot! A API está sendo consumida no Front-End com AXIOS utilizando React.js. A aplicação está realizando um CRUD e faz a conexão com um banco de dados relacional (PostgreSQL)! 
                    <br/>
                    
                </p>


                


                <p className='resumo2'>Nessa tabela é possivel visualizar, editar e excluir as informações! </p>

            </div>

            <div className='tabela' >

                <ul className='linhaInfo'>
                    <li className='linhaInfoCliente'>INFORMAÇÕES CLIENTE</li>
                    <li className='linhaInfoSoftware'>INFORMAÇÕES SOFTWARE</li>                                
                </ul>


                <ul className='linhaPrincipal'>
                    <li>CPF</li>
                    <li>NOME</li>                                
                    <li>TELEFONE</li> 
                    <li>REQUISITOS</li>
                    <li>VALOR (R$)</li> 
                    <li>DESENVOLVEDOR</li> 
                    <li>DATA DE ENTREGA</li>
                    <li> </li> 
                </ul>

                {posts.map((post, key) => {

                    return (
                        <>
                            <ul className='linhaSecundaria' key={key}>
                                <li>{post.cpfCliente}</li>
                                <li>{post.nomeCliente}</li>
                                <li>{post.telefoneCliente}</li>
                                <li>{post.softwareDesejado}</li>
                                <li>R$ {post.valorSoftware}</li>
                                <li>{post.desenvolvedor}</li>
                                <li>{post.dataEntrega}</li>
                                <li>
                                    <div className='btn'>
                                        <div className='btn-editar'>
                                            <Link to={{ pathname: `/edit/${post.id}` }}>
                                                <FaRegEdit />
                                            </Link>
                                        </div>

                                        <div className='btn-deletar'>
                                            <FaTrash onClick={() => deletePost(post.id) }></FaTrash>
                                        </div>
                                    </div>  
                                </li>
                            </ul>
                        </>
                    )
                })}

            </div>

            <div>
                <p className='resumo2'> Caso queira visualizar o código fonte, clique: <a href='https://github.com/JoaoSConrado/RestAPI-controleEstacionamento' target="_blank">RestAPI</a></p>
            </div>

            
        </>

       
    )

}

export default Cards;