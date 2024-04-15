import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Principal from './Principal'
import DetalheItem from './DetalheItem'
import ListagemCarrinho from './ListagemCarrinho'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
      <Route path='/' element={<App />}/>  
        <Route path='/Principal' element={<Principal />} />
        <Route path='/DetalheItem' element={<DetalheItem/>}/>
        <Route path='/ListarCarrinho' element={<ListagemCarrinho/>}/>
      </Routes>
    

  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
