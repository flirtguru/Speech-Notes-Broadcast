var express=require('express');
app=express();
var server=require('http').createServer(app);
var path=require('path');
var io =require('socket.io')(server);
var number=0;
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'html');
io.on('connection',function(socket){
number+=1;
  console.log(`${number} users online`);
  socket.on('notes',(data)=>{
io.sockets.emit('listener',{
listen:data.Speaker

});

});



})

  io.on('disconnect',()=>{
      number-=1;
       console.log(`${number} users online`);
          })






server.listen(3000,()=>{

console.log("Running on port 3000");

 });
