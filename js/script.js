// * burger menu
const burgerButton = document.querySelector(".burger_menu_button");
const burgerIcon = document.querySelector(".burger_menu_icon");
const menuMobile = document.querySelector(".nav_mobile");

burgerButton.addEventListener("click", function(){
    burgerIcon.classList.toggle("burger_menu_icon_active")
    menuMobile.classList.toggle("open_menu")
})

// *navbar fixed 
const navbar = document.querySelector(".navbar_index");
const firstScreenContent = document.querySelector(".first_screen_block_text");
window.addEventListener("scroll", function(){
    let scroll = window.scrollY;
    if(scroll > 200){
        navbar.classList.add("navbar_fixed");
        firstScreenContent.style.marginTop = "100px"
    }else{
        navbar.classList.remove("navbar_fixed");
        firstScreenContent.style.marginTop = "0px"
    }
})

// *validation form
const formaJs = document.querySelector(".js_forma");
const inputsJs = document.querySelectorAll(".js_form_input");
const emailJs = document.querySelector(".user_email");
const error = document.querySelector(".error_text");
formaJs.addEventListener("submit", function(event){
    inputsJs.forEach((input) => {
        if(input.value === ""){
            input.style.border = "solid 2px #ff0000";
            event.preventDefault()
        }else{
            console.log("Форма отправлена!")
            input.style.border = "none";
            input.value = "";

        }
   });
});

// *video
const video = document.querySelector(".process_video");
const videoPlay = document.querySelector(".process_video");
const videoBtnPlay = document.querySelector(".button_play");
videoPlay.addEventListener("click", function(){
    if(video.paused){
        video.play();
        videoBtnPlay.style.opacity = 0;

    }else{
        video.pause();
        videoBtnPlay.style.opacity = 1;
    }
})
videoBtnPlay.addEventListener("click", function(){
    if(video.paused){
        video.play();
        videoBtnPlay.style.opacity = 0;

    }else{
        video.pause();
        videoBtnPlay.style.opacity = 1;
    }
})

// *slider 
const sliders = document.querySelectorAll(".slider_content");
const sliderPoints = document.querySelectorAll(".slider_point");
sliders[1].classList.add("slider_content_active");
sliderPoints[1].classList.add("slider_point_active");
let sliderIndex = 0;
for(let i = 0; i < sliderPoints.length; i++){
    sliderPoints[i].addEventListener("click", function(){
        for(let j = 0; j < sliders.length; j++){
            sliderPoints[j].classList.remove("slider_point_active");
            sliders[j].classList.remove("slider_content_active");
        }
        sliderIndex = i;
        sliders[sliderIndex].classList.add("slider_content_active");
        sliderPoints[sliderIndex].classList.add("slider_point_active");
    })
}

