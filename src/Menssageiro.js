
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 
const  Menssageiro = (menssagem,tempo ) =>{
   
    toast(menssagem,{
        position: "top-right",
        autoClose: tempo,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

    })
    return (<ToastContainer/>)
}
 export default  Menssageiro;