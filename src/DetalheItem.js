import Menu from './Menu'

function Detalhe(){
 
     const Item =  JSON.parse(localStorage.getItem('Item'))
    const {Nome,img,Texto}= Item;
    return(
        <div className='geral'>
            <Menu />
              <div className="App">
        <div className="Container">
            <img src={img} about="Texto" alt={Texto}></img>
            <h4>{Nome}</h4>  
            <p>{Texto}</p>
        </div>
            </div>
        </div>
    )
}

export default Detalhe;