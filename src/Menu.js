import './menu.css'
import shop from './Imagens/shopCart.png'
import { useNavigate,Navigate} from 'react-router-dom'
import { useEffect,useState } from 'react';
function Menu({total}){

   
  const [nome,setNome]=useState()
    const [listar,SetListar]= useState(false)
    const nav = useNavigate();
    useEffect(()=>{
        if(listar)      {
            
            nav("/ListarCarrinho");
        }
 
    },[listar,nav])
    return(

        <div className="menu">
                <button  onClick={()=>{setNome('/Principal')}}>Principal</button>
                    <button onClick={()=>{setNome('/ListarCarrinho')}}>Produtos</button>
                    <button  onClick={()=>{setNome('/')}}>Login</button>                 
                    <button  onClick={()=>{setNome('/CadastroUsuario')}}>CadastroUsuario</button>                 
                    
                      <div className='containerCard'>
                       <div className='Total'>{total=6}</div>    
                      <img className='ima' src={shop} onClick={()=>{SetListar(true)}} alt='CarShop'></img>
                      </div>
                       
                    {nome && (<Navigate to={nome}></Navigate>)}
                            
                        
                                
            
        </div>
    )

}

export default Menu;