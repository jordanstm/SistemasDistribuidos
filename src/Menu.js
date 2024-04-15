import './menu.css'
import shop from './Imagens/shopCart.png'
import { useNavigate} from 'react-router-dom'
import { useEffect,useState } from 'react';
function Menu({total}){

   
  
    const [listar,SetListar]= useState(false)
    const nav = useNavigate();
    useEffect(()=>{
        if(listar)      {
            
            nav("/ListarCarrinho");
        }
 
    },[listar,nav])
    return(

        <div className="menu">
                <a href="\">Principal</a>
                    <a href="\">Produtos</a>
                    <a href="\">Login</a>                 
                    
                      <div className='containerCard'>
                       <div className='Total'>{total=3}</div>    
                      <img className='ima' src={shop} onClick={()=>{SetListar(true)}} alt='CarShop'></img>
                      </div>
                       
                    
                            
                        
                                
            
        </div>
    )

}

export default Menu;