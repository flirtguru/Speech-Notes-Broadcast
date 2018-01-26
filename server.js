var express=require('express');
app=express();
var server=require('http').createServer(app);
var path=require('path');
var io =require('socket.io')(server);

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'html');
io.on('connection',function(socket){


  socket.on('notes',(data)=>{
socket.broadcast.emit('notes',data);

});



});

  io.on('disconnect',()=>{

       console.log(`connection lost`);
     });






server.listen(3000,()=>{

console.log("Running on port 3000");

 });
