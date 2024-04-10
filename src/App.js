import logo from './logo.svg';
import './App.css';
import {Button} from 'react'
function App() {
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
            <input className='usuario'></input>
            <p>Senha</p>
            <input className='senha' type='password'></input>
           <button className='btnLogar' >Logar</button>
           <buton className='logingoogle'>Logar com conta google</buton>
           <p>ou Cadastre-se <button>Aqui</button></p>
          
        </div>
      </header>
    </div>
  );
}

export default App;
