
function register(){
    if(document.getElementById("firstname") != null &&  document.getElementById("lastName")  != null 
        &&  document.getElementById("password")  != null && document.getElementById("email")  != null ){
    
        var fName = document.getElementById("firstname");
        var lName = document.getElementById("lastName");
        var pass = document.getElementById("password");
        var email = document.getElementById("email");

        
    
        if(fName.value == "" || lName.value == "" ||  pass.value == "" || email.value == ""  ){
            alert ('please fill the data');
        }
        else {
            localStorage.setItem("firstname" , fName.value);
            localStorage.setItem("lastName" , lName.value);
            localStorage.setItem("password" , pass.value);
            localStorage.setItem("email" , email.value);
        }
    }
  
};



