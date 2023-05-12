function validateForm()                                    
{ 
    const name = document.forms["myForm"]["name"];               
    const emailSend = document.forms["myForm"]["emailSend"];    
    const message = document.forms["myForm"]["message"];   
   
    if (name.value === "")                                  
    { 
        document.getElementById('errorname').textContent="Veuillez entrez un nom valide";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').textContent="";  
    }
       
    if (emailSend.value === "")                                   
    { 
        document.getElementById('erroremail').textContent="Veuillez entrez une adresse mail valide"; 
        emailSend.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').textContent="";  
    }
   
    if (emailSend.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').textContent="Veuillez entrez une adresse mail valide"; 
        emailSend.focus(); 
        return false; 
    } 
   
    if (emailSend.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').textContent="Veuillez entrez une adresse mail valide"; 
        emailSend.focus(); 
        return false; 
    } 
   
    if (message.value === "")                           
    {
        document.getElementById('errormsg').textContent="Veuillez entrez un message valide"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').textContent="";  
    }
   
    return true; 
}