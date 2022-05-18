
  function login(){
      if( document.getElementById("email") != null &&  document.getElementById("password") != null){
        
        var email = document.getElementById("email").value;
        var pass = document.getElementById("password").value;
      
    
      if ( localStorage.getItem('email') ===  this.email && localStorage.getItem('password') === this.pass)
        {
            alert('success login')
            setTimeout(  ()=> { window.location.href ="home"});
        }    
        else     
        {
            alert ( "data is wrong");   
        }
    }
  };