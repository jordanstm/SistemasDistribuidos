import Conector from './Conector'


const GravarLog=async(log)=>{

    await fs.writeFile('/log.txt',log,{ flag : 'a+' },err={} )
    
}

async function ExecutaSemQuery(SQL){

    return await Conector.knex.raw(SQL)
    .then((dados) => {
      return dados;
    }).catch((err) => {GravarLog(err)
      console.error('Erro na Execurção do comando ',err);
    })
   }
   async function CriarBanco(){
    var sql = `Create database ´Teste´`
    await ExecutaSemQuery(sql);
   }

   async function CriaTabelaUsuario(Usuario){
    var sql  = `Create table Usuario(Codigo identity(1,1),Nome char(50),Emailchar (50))`
    await ExecutaSemQuery(sql).catch(err=>console.log("Deu erro e foi",err))
   }

   async function PegaCodigoMaximo(tabela){
    var sql = `Select Max(Codigo)+1 from ${tabela}`  
    var ret = await ExecutaSemQuery(sql).then(d=>{return d}) 
    if(ret.rows.count==0){

    }
   }

   async function GravaUsuario(usuario){
    var nCodigo  = PegaCodigoMaximo('Usuario').then(d=>{return d.data})
    var sql = `Insert Into Usuarios(Codigo,Nome,Email)`
    sql +=` Values(${nCodigo},'${usuario.nome}','${usuario.email}')`
    ExecutaSemQuery(sql);
   }