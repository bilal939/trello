





function validation() {
   let email=document.getElementById("exampleInputEmail1").value;
   let phonenumber=document.getElementById("exampleInputEmail1").value;
   let password=document.getElementById("exampleInputPassword1").value;
   let Confirmpassword=document.getElementById("exampleInputPassword2").value;

  let emailcheck=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let passwordregex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

 

  if (emailcheck.test(email)) {
   document.getElementById("Emailerror").innerHTML=""
  }
  else{
   document.getElementById("Emailerror").innerHTML="Invalid Email";
  }
  if (passwordregex.test(password)) {
    document.getElementById("passworderror").innerHTML=""
   }
   else{
    document.getElementById("passworderror").innerHTML="Minimum eight characters, at least one letter and one number:";
    return false;
   }

  if (password == Confirmpassword &&  password != null && Confirmpassword != null) {
    alert("Form submitted Successfully");
  } 
  else {
    document.getElementById("cpassworderror").innerHTML="password dont match";
    return false;
  }

 }
 

 

  
        
function call(params) {
    window.open('/Login.html', '_blank');
}

