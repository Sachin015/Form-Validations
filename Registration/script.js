

function register(){
    const proper = /^[A-Za-z]+$/ ; 
 const fname = document.getElementById("fname").value.trim()
 const lname = document.getElementById("lname").value.trim()

//  ------------for fname-------------
 if(fname == ""){
    document.getElementById("first").innerHTML="**must fill firstname"
    return false;
 }
 else if(fname.length <3){
    document.getElementById("first").innerHTML="**character must be at least 3"
    return false;
 }
 else if(fname.length >20){
    document.getElementById("first").innerHTML="**character must be less than 20"
    return false;
 }
 else if(fname.match(proper)){
    true;
 }else{
    document.getElementById("first").innerHTML="**name must be in alphabets"
    return false
 }


//  --------------for lname-------------
 if(lname == ""){
    document.getElementById("last").innerHTML="**must fill lastname"
    return false;
 }
 else if(lname.length <3){
    document.getElementById("last").innerHTML="**character must be at least 3"
    return false;
 }
 else if(lname.length >20){
    document.getElementById("last").innerHTML="**character must be less than 20"
    return false;
 }
 else if(lname.match(proper)){
    true;
 }else{
    document.getElementById("last").innerHTML="**name must be in alphabets"
    return false
 }

// ------------------------for address-------------------
const address = document.getElementById("address").value.trim();
if(address == ""){
    document.getElementById("addr").innerHTML="**Must fill Address"
    return false;
 }
 else if(address.length <4){
    document.getElementById("addr").innerHTML="**character must be at least 4"
    return false;
 }
 else if(address.length >30){
    document.getElementById("addr").innerHTML="**character must be less than 30"
    return false;
 }
 else if(address.match(proper)){
    true;
 }else{
    document.getElementById("addr").innerHTML="**Address must be in alphabets"
    return false
 }

//  ----------------------for phone number --------------------------
 const phone = document.getElementById("phone").value.trim();
  const onlynumber =  /^\d{10}$/ ;//  (\d) means matches any digit (equivalent to [0-9]).

  if(phone == ""){
   document.getElementById("contact").innerHTML = "**Number cannot be empty";
   return false;
  }
  else if(phone.length<10){
   document.getElementById("contact").innerHTML="**Number must be atleast 10 digits";
   return false;
}
  else if(phone.match(onlynumber)){
   true;
  }else{
   document.getElementById("contact").innerHTML = "**Not a valid Number";
   return false;
  }
//   ---------------for email--------------
  const email = document.getElementById("email").value.trim();

  if(email == ""){
   document.getElementById("mail").innerHTML = "Email cannot be empty";
   return false;
  }
  else if(email.length<10){
   document.getElementById("mail").innerHTML = "Email length must be larger";
   return false;
  }

}