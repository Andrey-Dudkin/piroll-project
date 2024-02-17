// *validation form
const formaJs = document.querySelector(".js_forma");
const inputsJs = document.querySelectorAll(".js_form_input");
const emailJs = document.querySelector(".user_email");
const error = document.querySelector(".error_text");
formaJs.addEventListener("submit", function(event){
    inputsJs.forEach((input) => {
        if(input.value === ""){
            input.style.border = "solid 2px #ff0000"
            event.preventDefault()
        }else{
            console.log("Форма отправлена!")
        }
   });
})