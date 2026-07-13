function checkPassword() {

    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    const input = document.getElementById("password");

    if(password === "50504048282"){

        message.style.color="#69ff95";
        message.innerHTML="ACCESS GRANTED";

        setTimeout(function(){

            window.location.href="clue.html";

        },1000);

    }else{

        message.style.color="#ff5c5c";
        message.innerHTML="ACCESS DENIED";

        input.classList.add("shake");

        setTimeout(function(){

            input.classList.remove("shake");

        },300);

    }

}

document.getElementById("password").addEventListener("keydown", function(event){

    if(event.key==="Enter"){

        checkPassword();

    }

});