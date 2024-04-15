import React,{useEffect,useState} from 'react'
import cftv1 from  './Imagens/CFTV2.jpg'
import cftv2 from  './Imagens/CFTV3.jpg'
import cftv4 from  './Imagens/CFTV4.jpg'
import cftv5 from  './Imagens/CFTV5.jpg'
import cftv6 from  './Imagens/CFTV6.jpg'
import Menu from "./Menu"
import { useNavigate} from 'react-router-dom'
export default function ListagemCarrinho() {
    
    const data = [
        {id:1,Nome:'Cameras de monitoramento predial',img :cftv1,Texto:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'},
        {id:2,Nome:'Cameras Internas',img:cftv2,Texto:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'},
        {id:3,Nome:'Cercas eletrificadas',img:cftv4,Texto:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'},
        {id:4,Nome:'Manutenções em instalações',img:cftv5,Texto:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'},
        {id:5,Nome:'Porteiro Eletronico',img:cftv6,Texto:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'},
     ]  
     
     const navigate = useNavigate();
     const[clicou,SetClicou]=useState([]);
  
     useEffect(()=>{
          if(clicou.length>0){
              localStorage.setItem( 'Item',JSON.stringify(clicou[0]))
           navigate('/DetalheItem');
          }
     },[clicou,navigate])
  
  return (
    <div className="geral">
    <Menu />
    <div className="App">
          
           <h1>Itens No Carrinho 
             {data.map((item)=>(
            <div className="container" key={item.id} onClick={()=>{SetClicou([item]);}}><h3 className="titulo">{item.Nome}</h3>
             <img className="img" alt={item.Nome} src={item.img}></img>
             <p className="texto">{item.Texto}</p>
            </div>
             ))}
           </h1>
      </div>

    </div>
    
  )
}
