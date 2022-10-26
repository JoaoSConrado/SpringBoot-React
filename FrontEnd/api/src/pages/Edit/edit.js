/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import axios from 'axios';



import Header from '../../components/Header/Header';

import { useNavigate, useParams } from 'react-router-dom' 

import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";


const validationPost = yup.object().shape({
    cpfCliente: yup.string().required(),
    nomeCliente: yup.string().required(),
    telefoneCliente: yup.string().required(),  
    softwareDesejado: yup.string().required(),
    valorSoftware: yup.string().required(),
    desenvolvedor: yup.string().required(), 
    dataEntrega: yup.string().required(),

})

function Edit() {

    const { id } = useParams();

    let navigate = useNavigate();
 
   const addPost = data => axios.put(`http://localhost:8080/controle-software/${id}`, data)
    .then(() => {
       console.log("DEU CERTO!")
        navigate('/')
    }).catch (() => {
        console.log("DEU ERRADO, LARGA DE SER BURRO!")
    })

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(validationPost)
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/controle-software/${id}`) 
        .then((response) => {
            reset(response.data)
        })
    }, [])

    return (
        <>
            <div>
                <Header />

                <main>
                    <div className='card-post'>
                        <h2 className='titlePost'>EDITE O PEDIDO DO SOFTWARE</h2>

                        <div className='card-body-post'>
                            <form onSubmit={handleSubmit(addPost)}>

                                <div className='fields'>
                                    <label>CPF DO CLIENTE:</label>
                                    <input 
                                    type="text" 
                                    name="cpfCliente"
                                    placeholder ="123.456.788-55" 
                                    {...register("cpfCliente")}/>
                                    <p className='error-message'>{errors.cpfCliente?.message}</p>
                                </div>

                                <div className='fields'>
                                    <label>NOME DO CLIENTE:</label>
                                    <input 
                                    type="text" 
                                    name="nomeCliente"
                                    placeholder ="João Conrado" 
                                    {...register("nomeCliente")}/>
                                    <p className='error-message'>{errors.nomeCliente?.message}</p>
                                </div>

                                <div className='fields'>
                                    <label>TELEFONE DO CLIENTE:</label>
                                    <input 
                                    type="text" 
                                    name="telefoneCliente"
                                    placeholder ="(99) 99999-9999" 
                                    {...register("telefoneCliente")}/>
                                    <p className='error-message'>{errors.telefoneCliente?.message}</p>
                                </div>

                                
                                <div className='fields'>
                                    <label>SOFTWARE DESEJADO:</label>
                                    <input 
                                    type="text" 
                                    name="softwareDesejado" 
                                    placeholder ="Front-End em React.js" 
                                    {...register("softwareDesejado")}/>
                                    <p className='error-message'>{errors.softwareDesejado?.message}</p>
                                </div>

                                <div className='fields'>
                                    <label>VALOR DO SOFTWARE (R$): </label>
                                    <input 
                                    type="text" 
                                    name="valorSoftware" 
                                    placeholder ="4.000,00" 
                                    {...register("valorSoftware")} />
                                    <p className='error-message'>{errors.valorSoftware?.message}</p>
                                </div>

                                <div className='fields'>
                                    <label>DESENVOLVEDOR: </label>
                                    <input 
                                    type="text" 
                                    name="desenvolvedor" 
                                    placeholder ="Dev Júnior - Conrado" 
                                    {...register("desenvolvedor")}/>
                                    <p className='error-message'>{errors.desenvolvedor?.message}</p>
                                </div>

                                <div className='fields'>
                                    <label>DATA DE ENTREGA: </label>
                                    <input 
                                    type="text" 
                                    name="dataEntrega" 
                                    placeholder ="dd/MM/yyyy" 
                                    {...register("dataEntrega")}/>
                                    <p className='error-message'>{errors.dataEntrega?.message}</p>
                                </div>

                                <div className='btn-post'>
                                    <button className='btn-enviar' type="submit">ENVIAR</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Edit;