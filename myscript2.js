function validation2(){
    var phone = document.getElementById(phone).valiue;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "15px";

    if(isNaN(phone) || phone.length != 10){
        text="Please enter a valid phone number."
        error_message.innerHTML = text;
        return  false;
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
