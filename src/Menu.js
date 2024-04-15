import './menu.css'
import shop from './Imagens/shopCart.png'
function Menu({total}){
    return(

        <div className="menu">
                <a href="\">Principal</a>
                    <a href="\">Produtos</a>
                    <a href="\">Login</a>                 
                    
                      <div className='containerCard'>
                       <div className='Total'>{total}</div>    
                      <img className='cart' src={shop}></img>
                      </div>
                       
                    
                            
                        
                                
            
        </div>
    )

}

export default Menu;