/*Javascript for SUMX
Created by Vyanna Hill
Give functionality to the button of Faq page
*/


var btnSign=document.getElementById("btnLog");
var eMail=document.getElementById("email");
var btnC=document.getElementById("btnCC");
var btn1=document.getElementById("btn1t1");
var btnOrg=document.getElementById("btnOrg");
var btnDel=document.getElementById("btnDel");

var welcome=document.getElementById("welcome");

btn1.style.display="none";
btnOrg.style.display="none";
btnC.style.display="none";
btnDel.style.display="none";
//hide all the sign in options 

btnSign.addEventListener("click",function(){
    eMail.style.display="none";
    btnSign.style.display="none";
    welcome.innerHTML="Hello,"+eMail.value;
    // Greet logged in User with database options 

    btnC.style.display="inLine";
    btn1.style.display="inLine";
    btnOrg.style.display="inLine";
    btnDel.style.display="inLine";
    //options for a Admin user will appear

});



