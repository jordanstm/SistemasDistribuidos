import "./Principal.css"
import Carrosel from './Carroussel'
import Menu from "./Menu"
import { useNavigate} from 'react-router-dom'
import car1 from "./Imagens/Carr1.jpg"
import car2 from "./Imagens/Carr2.jpg"
import car3 from "./Imagens/Carr3.jpg"
import car4 from "./Imagens/Carr4.jpg"
import car5 from "./Imagens/Carr5.jpg"
import car6 from "./Imagens/Carr6.jpg"
import Card from "./Card"
import Serv from'./Imagens/Servico.jpg';
import Serv1 from'./Imagens/Mnutencao.jpg';
function Principal(){
    var Carros =[car1,car2,car3,car4,car5,car6]
   return(
      
     <div className="geral">
      <Menu/>      
     
      <Carrosel imagens={Carros}  />
     
      
      <div className="App">
     
         <div className="container">
            <h2>Sistemas Distribuidos</h2>
            <Card titulo='Especialistas' Texto="Varios especalistas a disposicao para melhor servi-lo" img={Serv} />
            <Card titulo='Serviços Essenciais' Texto="faça seu levantamento tecnico com nossa  equipe" img={Serv1} />
         </div>
         
      </div>
     </div>  
   )
}

export default Principal;