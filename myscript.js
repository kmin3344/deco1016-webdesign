function validation(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confpassword = document.getElementById("confpassword").value;
    var error_message = document.getElementById("error_message");
    var 
    var text;

    error_message.style.padding = "10px";

    if(firstname.length <2){
        text = "Please enter a valid name.";
        error_message.innerHTML = text;
        return false;
    }

    if(lastname.length <1){
        text= "Please enter a valid surname."
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length<10){
        text= "Please enter a valid email."
        error_message.innerHTML = text;
        return false;
    }

    if(password.length <4){
        text= "Please enter a valid password."
        error_message.innerHTML = text;
        return false;
    }

    if(password !== confpassword){
        text= "Your passwords don't match."
        error_message.innerHTML = text;
        return false;
    }
    return true;
}

function submitform()
{
    if(document.myform.onsubmit &&
    !document.myform.onsubmit())
    {
        return;
    }
 document.myform.submit();
}
