var myInput1 = document.getElementById("psw1");
var myInput2 = document.getElementById("psw2");
var errormsg = document.getElementById("message");

// When the user starts to type something inside the password field
myInput1.onkeyup = function() {

    if(myInput1.value === (myInput2.value)) { 
        myInput1.classList.remove("error");
        myInput2.classList.remove("error");
        errormsg.classList.remove("error");}
        
    else {
        myInput1.classList.add("error");
        myInput2.classList.add("error");
        errormsg.classList.add("error");}
    }

myInput2.onkeyup = function() {

    if (myInput1.value === (myInput2.value)) { 
        myInput1.classList.remove("error");
        myInput2.classList.remove("error");
        errormsg.classList.remove("error"); } 

    else {myInput1.classList.add("error");
          myInput2.classList.add("error");
          errormsg.classList.add("error");}
}