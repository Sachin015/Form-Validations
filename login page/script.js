
let form = document.querySelector("form");


function myform(){
    let checkalpha = /^[A-Za-z]+$/;
    let username = document.getElementById("username").value ;
    if(username == ""){
       let a= document.getElementById("msg");
       a.innerHTML="**Please fill the usename "
        return false;
    }
    else if(username.length <3){
        let a= document.getElementById("msg");
       a.innerHTML="**username must be at least 3 letter"
        return false;
    }
    else if(username.length >20){
        let a= document.getElementById("msg");
       a.innerHTML="**username must be less than 20 letter"
        return false;
    }
    else if (username.match(checkalpha)){
        true;
    }
    else{
        let a= document.getElementById("msg");
        a.innerHTML="**only alphabets are allowed"
         return false;
    }
// ---------------for password------------------
let checkpass = /[^A-Za-z+$]/;
    let password = document.getElementById("password").value;
    if(password == ""){
        document.getElementById("msg-two").innerHTML= "**Please fill the password ";
        return false;
    }
    else if(password.length<8){
        document.getElementById("msg-two").innerHTML= "**password must be at lest 8 characters ";
        return false;
    }
    else if(password.length>20){
        document.getElementById("msg-two").innerHTML= "**password must be less than 20 characters ";
        return false;
    }

    else if(password.match(checkpass)){
    true;
    } else{
        document.getElementById("msg-two").innerHTML= "**password must contain at least one symbol  characters ";
        return false;
    }
}