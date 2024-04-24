const cors = require('cors');
const Express = require('express');
const bodyparser = require('body-parser')
const Executor = require('./Conexao/Executor');
const http = require('http');
const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100',
    'http://localhost:8099',
    'http://localhost:3000',
  ];
  const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Origin not allowed by CORS'));
      }
    },
  };
  const app = Express();
  app.use(cors());
  app.options('*', cors(corsOptions));
  app.use(bodyparser.json());
  //Metodos !!!!!!!!!!!!!!!!!

  app.get('/', cors(corsOptions), (req, res, next) => {
    res.json([{ message: 'Bem Vindo Senhor, Como posso servi-lo!!!' }])
  })

app.post('/Usuarios',cors(corsOptions),(req,res,next)=>{
    Executor.GravaUsuario(req.body)
})
  //Fim dos Metodos
  
  const Server = http.createServer(app);
Server.listen(8099);
console.log("Servidor escutando na porta 8099");