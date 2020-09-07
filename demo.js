function solve()
{
var str= document.getElementById("display").value
var add =str.indexOf("+",1)
var sub=str.indexOf("-",1)
var mul=str.indexOf("*",1)
var div=str.indexOf("/",1)
var sqroot=str.indexOf("v")
var abs=str.indexOf("|")
var percent=str.indexOf("%")
if (add !=-1){
    var z=str.substr(0,add)
    var u=str.substr(add+1,)
    var v=parseFloat(z)
    var w=parseFloat(u)
    document.getElementById("display").value=eval(v+w)
}
    if (sub!=-1){
        var z=str.substr(0,sub)
        var u=str.substr(sub+1,)
        var v=parseFloat(z)
        var w=parseFloat(u)
        document.getElementById("display").value=eval(v-w)
    }
    if (mul !=-1){
        var z=str.substr(0,mul)
        var u=str.substr(mul+1,)
        var v=parseFloat(z)
        var w=parseFloat(u)
        document.getElementById("display").value=eval(v*w)
    }
    if (div !=-1){
        var z=str.substr(0,div)
        var u=str.substr(div+1,)
        var v=parseFloat(z)
        var w=parseFloat(u)
        document.getElementById("display").value=eval(v/w)
    }
    if (sqroot !=-1){
        var z=str.substr(sqroot+1,)
        var v=parseFloat(z)
        var w=v.toFixed(3)
        document.getElementById("display").value=Math.sqrt(w)    
    }
    if (abs!=-1){
        var z=str.substr(abs+1,)
        var v=parseFloat(z)
        document.getElementById("display").value=Math.abs(v)
    }
    if (percent!=-1){
        var z=str.substr(0,percent)
        var v=str.substr(percent+1,)
        var w=parseFloat(z)
        var u=parseFloat(v)
        var t=eval((w/100)*u)       
        document.getElementById("display").value=t
    }
}

function clr()
{
document.getElementById("display").value = ""
}





function validate(){
    var name=document.getElementById("name");
    var number=document.getElementById("phone");
    var mail=document.getElementById("mail");
    var regEx1 = /\S+@\S+\.\S+/;
    var regEx2= /^[a-zA-Z ]{2,30}$/
    var button = document.querySelector('.button');
    if (name.value !== "" && regEx2.test(name.value) && regEx1.test(mail.value) && number.value.length==10 ){
        button.disabled = false;
        } 
        else {
           
           button.disabled = true;
        }
}