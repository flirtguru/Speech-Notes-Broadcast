
window.addEventListener("load", startup, false);


function startup()
{

        var words;
        var SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition=new SpeechRecognition();

document.getElementById("speech").onclick=()=>{
recognition.start();
recognition.continuous=true;
recognition.interimResults=true;
recognition.lang="en-US";

}

document.getElementById("stop").onclick=()=>{

recognition.stop();

}




recognition.onresult=function(event){
  console.log(event);
if(event.results[0].isFinal)
  document.getElementById("speaker").append(event.results[0][0].transcript);

}

var socket=io();
/*var data={
  Speaker:document.getElementById("speaker").textContent
}
*/
document.getElementById("speaker").addEventListener("onchange",function(){

socket.emit('notes',{
  Speaker:document.getElementById("speaker").textContent
});

});

}
