import "./Principal.css"
import cftv1 from  './Imagens/CFTV2.jpg'
import cftv2 from  './Imagens/CFTV3.jpg'
import cftv4 from  './Imagens/CFTV4.jpg'
import cftv5 from  './Imagens/CFTV5.jpg'
import Menu from "./Menu"
function Principal(){
   const data = [
      {Nome:'Cameras de monitoramento predial',img :cftv1,Texto:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'},
      {Nome:'Cameras Internas',img:cftv2,Texto:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'},
      {Nome:'Cercas eletrificadas',img:cftv4,Texto:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'},
      {Nome:'Manutenções em instalações',img:cftv5,Texto:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'},
      {Nome:'Porteiro Eletronico',img:cftv5,Texto:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'},
   ]
   return(
    <div className="geral">
    <Menu />
    <div className="App">
          
           <h1>Itens No Carrinho
             {data.map((item)=>(
            <div className="container"><h3 className="titulo">{item.Nome}</h3>
             <img className="img" alt={item.Nome} src={item.img}></img>
             <p className="texto">{item.Texto}</p>
            </div>
             ))}
           </h1>
      </div>

    </div>
      
   )
}

export default Principal;