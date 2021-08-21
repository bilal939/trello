function validation(params) {
   var email=document.getElementById("exampleInputEmail1").value;
   var phonenumber=document.getElementById("exampleInputEmail1").value;
   var password=document.getElementById("exampleInputPassword1").value;
   var Confirmpassword=document.getElementById("exampleInputPassword2").value;

  var emailcheck=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var chkpassword=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if (emailcheck.test(email)) {
      document.getElementById("exampleInputEmail1").innerHTML="";
  }
  else{
    document.getElementById("Emailerror").innerHTML="email is invalid";
  }
 if (chkpassword.test(password))
 if (password===Confirmpassword) {
    document.getElementById("passworderror").innerHTML="";
 }
 else{
    document.getElementById("cpassworderror").innerHTML="password dont match";
 }
 else{
    document.getElementById("passworderror").innerHTML=
    "passord shoud contain Minimum eight characters, at least one letter, one number and one special character:";
 }
     
  

 if (emailcheck.test(email) && chkpassword.test(password) && password===Confirmpassword ) {
    alert("form submitted")
 }
 else{
     alert("fill the form again")
 }

}
function call(params) {
    window.open('/Login.html', '_blank');
}