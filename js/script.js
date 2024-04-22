
    
function onFormSubmit(){
    
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    alert("Gracias "+ fname + " " + lname +"! registramos su mensaje: " + message);
    
    //mas adelante persistimos en una BBDD

    window.location.href="index.html";
};