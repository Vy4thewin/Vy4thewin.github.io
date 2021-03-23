/*Javascript for SUMX
Created by Vyanna Hill
*/


var btnSign=document.getElementById("btnLog");
var eMail=document.getElementById("email");
var btnC=document.getElementById("btnLA");
var signForm=document.getElementById("signForm");
var welcome=document.getElementById("welcome");


btnC.style.display='none';
//hide all the sign in options

btnSign.addEventListener("click",function(){
    signForm.style.display="none";
    welcome.innerHTML="Hello,"+eMail;
    btnC.style.display="inline";
});



