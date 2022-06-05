
  
const express = require('express')

const app = express()
const cors = require('cors');
var bodyParser = require('body-parser')



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "PUT, GET, POST, DELETE, OPTIONS"
  );
  next();
});

app.use(cors());

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());



// app.get('/getToDos', (req, res) => {
//   console.log('Enviando tareas');
//   res.json(toDos)
// });

const repl = require('repl');
const grpc = require('grpc')

/*
function call(user) {
  alv="hola"
  alv2="hola2"
  alv3=alv+","+alv2
  const client = new hello_proto.Greeter('34.125.81.73:50555', grpc.credentials.createInsecure())
  client.sayHello({name:alv3}, function(err, res){
    console.log(res)
  })
}
function eval(name, ctx, filename, callback) {
  callback(null, call(name));
}
repl.start({prompt: 'name> ', eval: eval});
*/
app.get('/Info-201807335', (req, res) => {

return res.json({  Info_201807335:" Juan Diego Alvarado Salguero -201807335  "})


});
app.post('/Info-201807335', (req, res) => {
  let { op1, op2 } = req.body


concact=op1+"-"+op2
total=eval(concact)
return res.json({  mensaje:" el total de la resta es  "+eval(total)})


});



app.listen(4000);
console.log('server oks');
