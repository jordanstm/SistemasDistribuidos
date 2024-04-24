import React, { useState } from 'react'
import APIConexao from './DAO'

import './App.css'

function Cadastrousuario() {

  const[n_Nome,Setnome]=useState();
  const[n_Senha,SetSenha]=useState();
  const[n_Email,SetEmail]=useState();


  const Api=async ()=>{

   let body={
    Nome:n_Nome,
    Senha:n_Senha,
    Email:n_Email
   }

   console.log("Assim estao os dados do body",body);
   
   await APIConexao("Usuarios",body);
  }
  return (
    <div className='container'>
    <div className='App-header'>
        <h2>Cadastre seu login</h2>
        <p>Usuario</p>
        <input className='Nome' onChange={(e)=>{Setnome(e.target.value)}}></input>
        <p>Senha</p>
        <input className='Senha' type='password' onChange={(e)=>{SetSenha(e.target.value)}}></input>
        <p>e-mail</p>
        <input className='Email' typeof='Email' onChange={(e)=>{SetEmail(e.target.value)}}></input>
      
        <button onClick={()=>{Api()}}>Cadastrar</button>
    </div>
    </div>
  )
}

export default Cadastrousuario