
  
function checkInput(){

    var input = document.querySelector("#input").value ;
    var d1 = document.querySelector(".div1");
    var d2 = document.querySelector(".div2");
    
    if(input  == "")
    {
        alert('empty text');
    }
    else if (input == 't' || input == 'T')
    {
       d1.style.display = 'block';
    }
    else if (input == 'f' || input == 'F')
    {
       d2.style.display = 'block';
    }
    else {
        alert("neither True nor False");
    }
    
    
    // alert("the script is attached to component ");
      
}
    
   




