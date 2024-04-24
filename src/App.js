import logo from './logo.svg';

import './App.css';
import {useState} from 'react'
 import {Navigate} from 'react-router-dom'
import Menssageiro from './Menssageiro';
function App() {
  const[usuario,Setusuario] = useState();
  const[senha,SetSenha] = useState();
  const[Validou,SetValidou]= useState(false);
  const [Erro,SetErro]=useState(false);
  const [Cadastrar,SetCadastrar]= useState(false)


 
  function AtualizaEstadoCadastro( valor)
  {
    SetCadastrar(valor);
  }
  function Realizalogin(usuario, senha){
     //Função para testar o Login
    if(usuario === 'Caio' && senha ==='123'){
      // navega para pagina principal
       SetValidou(true);
      
  
    }
    else{
      if( Validou === false )
      //alert('Usuario ou senha Invalidos!')
    SetErro(true);
    }

  }
   
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sistemas Distribuidos 
        </p>
        <div className='login'>
            <label className='lbllogin'>Login</label>
            <p>Usuario</p>
            <input className='usuario' onChange={(e)=>{Setusuario(e.target.value);SetErro(false)}}></input>
            <p>Senha</p>
            <input className='senha' type='password' onChange={(e)=>{SetSenha(e.target.value);SetErro(false)}}></input>
           <button className='btnLogar' onClick={()=>{ Realizalogin(usuario,senha)}}>Logar</button>
           <button className='logingoogle'>Logar com conta google</button>
           <p>ou Cadastre-se <button onClick={()=>{
            Cadastrar===true?AtualizaEstadoCadastro(false):AtualizaEstadoCadastro(true)
           }}>Aqui</button></p>
           { Validou && (<Navigate to='/Principal' />) }
           {Erro  &&(Menssageiro("Ops,Usuario ou Senha Invalido."))}
           {Cadastrar && <Navigate to='CadastroUsuario'/>}
        </div>
      </header>
    </div>
  );
}

export default App;
