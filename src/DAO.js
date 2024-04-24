import axios from 'axios';




const APICconexao= async( Rota,Parametro)=>{
   // let url = process.env.URLPADRAO
   const  body ={
        Nome:Parametro.Nome,
        Email:Parametro.Email,
        Senha:Parametro.Senha
     }
    
    let UrlFinal = "http://localhost:8099/" +Rota
     console.log(" url final esta ",UrlFinal);
    axios({

        method:'POST',
        url: UrlFinal,
        data:body
    })
    .then(d=>{ return d.data})
    .catch(ex=>{console.log('Deu Erro na chamada AXIOS',ex)})
}

 export default APICconexao;