const express = require('express');
const cors = require('cors');

const models = require('./models');

const app = express();
app.use(cors());
app.use(express.json())

let cliente = models.Cliente;
let itempedido = models.ItemPedido;
let pedido = models.Pedido;
let servico = models.Servico;

app.get('/',function(req,res){
    res.send('Hello World')
})

app.get('/clientes',function(req,res){
    res.send('Sejam bem vindos a ServicesTI')
})
app.post('/servicos',async(req,res)=>{
    await servico.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'Serviço criado com sucesso'

        })
       
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: 'Foi impossivel se conectar'
        })
    })
    
});




let port = process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo: http://localhost:3001');
})