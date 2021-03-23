/*Javascript for SUMX
Created by Vyanna Hill
Give functionality to the button of Faq page
*/


var btnSign=document.getElementById("btnLog");
var eMail=document.getElementById("email");
var btnC=document.getElementById("btnLA");

var welcome=document.getElementById("welcome");


btnC.style.display='none';
//hide all the sign in options

btnSign.addEventListener("click",function(){
    eMail.style.display="none";
    btnSign.style.display="none";
    welcome.innerHTML="Hello,"+eMail.value;
    btnC.style.display="inline";
});



