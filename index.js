
var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var emailInput = document.getElementById('txt');
    var email = emailInput.value;
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if(email.match(emailRegex)){
    document.querySelector(".container1").style.display = "none";
    document.querySelector(".container2").style.display = "flex";
    document.querySelector("b").innerHTML=email;
        let dismissbutton=document.getElementById("dismiss-btn");
        dismissbutton.addEventListener("click",function(){
            window.location="index.html" ;
        })

}
    else {
        document.getElementById("invalid-email").style.display="block";
        document.querySelector("input").style.color="red";
        document.querySelector("input").style.borderColor="red";
        document.querySelector("input").style.backgroundColor="#e2c0c0";
    }
   
});
document.addEventListener("DOMContentLoaded",media);
function media(){
    let query = window.matchMedia("(max-width:375px)");
    if(query.matches){
    let imageElement = document.getElementById("image");
    imageElement.src='main/assets/images/illustration-sign-up-mobile.svg';
    }
}
