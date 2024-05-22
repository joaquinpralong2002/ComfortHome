   
function onFormSubmit(){
    
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    alert("Gracias "+ fname + " " + lname +"! registramos su mensaje: " + message);
    
    //mas adelante persistimos en una BBDD

    window.location.href="index.html";
}



function validateForm()
{
    const EMAIL_HARDCODE = "admin@gmail.com";
    const PASSWORD_HARDCODE = "123456"; 
    const email = document.getElementById("form-email").value;
    const password = document.getElementById("form-contrasenia").value;
    var res;
    if(email=="" || password==""){
        alert("email y/o password vacío");
        res=false;
    }
    else
    {    
        res = (EMAIL_HARDCODE==email && PASSWORD_HARDCODE==password);
        if(res)
        {
            alert("DATOS CORRECTOS");
        }
        else
        {
            alert("Los datos ingresados no son válidos");
        }
    }

    sessionStorage.setItem("authorized", res);
    
} 

function callAPI()
{
    var html="";
    if(sessionStorage.getItem("authorized")=="true")
    {
        console.log("autorizado a usar la api");
        
        fetch('https://dummyjson.com/comments')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                data.comments.forEach(comment => {
                console.log(comment.body); // Muestra cada comentario
                html += [
                    '<p>Comentario: '+comment.body+' usuario: '+comment.user.username,
                    '</p>'
                    ].join('\n');
                
                });
               document.getElementById("comments").innerHTML = html;
            })
            .catch(error => {
                console.error("Fetch error:", error);
            });
   }
    else
    {
        console.log("No esta autorizado a usar la api");
        alert("No esta autorizado a usar la api");
    }
}