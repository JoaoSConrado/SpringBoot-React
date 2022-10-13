import React from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom' 

import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";


import Header from '../../components/Header/Header';
import './Post.css'

const validationPost = yup.object().shape({
    cpfCliente: yup.string().required(),
    nomeCliente: yup.string().required(),
    telefoneCliente: yup.string().required(),  
    softwareDesejado: yup.string().required(),
    valorSoftware: yup.string().required(),
    desenvolvedor: yup.string().required(), 
    dataEntrega: yup.string().required(),
})



function Post() {

    let navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationPost)
    });
    
    const addPost = data => axios.post("http://localhost:8080/controle-software", data)
    .then(() => {
        console.log("DEU CERTO!")
        navigate('/')
    }).catch (() => {
        console.log("DEU ERRADO, LARGA DE SER BURRO!")
    })


    return (
        <>
            <div>
                <Header />

                <main>
                    <div className='card-post'>
                        <h1>Criar Postagem</h1>
                        <div className='line-post'></div>

                        <div className='card-body-post'>
                            <form onSubmit={handleSubmit(addPost)}>

                                <div className='fields'>
                                    <label>cpfCliente</label>
                                    <input type="text" name="cpfCliente" {...register("cpfCliente")}/>
                                    <p className='error-message'>{errors.cpfCliente?.message}</p>
                                </div>

                                <div className='fields'>
                                    <label>nomeCliente</label>
                                    <input type="text" name="nomeCliente" {...register("nomeCliente")}/>
                                    <p className='error-message'>{errors.nomeCliente?.message}</p>
                                </div>

                                <div className='fields'>
                                    <label>telefoneCliente</label>
                                    <input type="text" name="telefoneCliente" {...register("telefoneCliente")}/>
                                    <p className='error-message'>{errors.telefoneCliente?.message}</p>
                                </div>

                                
                                <div className='fields'>
                                    <label>softwareDesejado</label>
                                    <input type="text" name="softwareDesejado" {...register("softwareDesejado")}/>
                                    <p className='error-message'>{errors.softwareDesejado?.message}</p>
                                </div>

                                <div className='fields'>
                                    <label>valorSoftware</label>
                                    <input type="text" name="valorSoftware" {...register("valorSoftware")}/>
                                    <p className='error-message'>{errors.valorSoftware?.message}</p>
                                </div>

                                <div className='fields'>
                                    <label>desenvolvedor</label>
                                    <input type="text" name="desenvolvedor" {...register("desenvolvedor")}/>
                                    <p className='error-message'>{errors.desenvolvedor?.message}</p>
                                </div>

                                <div className='fields'>
                                    <label>dataEntrega</label>
                                    <input type="text" name="dataEntrega" {...register("dataEntrega")}/>
                                    <p className='error-message'>{errors.dataEntrega?.message}</p>
                                </div>

                                <div className='btn-post'>
                                    <button type="submit">Enviar</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Post;