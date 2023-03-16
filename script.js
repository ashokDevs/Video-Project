const switchBtn=document.querySelector("#switchButton");
const switchChange=document.querySelector(".switch");
const vid=document.querySelector("#video");
const preLoader=document.querySelector(".preLoader")


window.addEventListener("load", ()=>{
    preLoader.classList.add("preLoaderHidden");
    switchBtn.addEventListener("click", ()=>{
        
        if(!switchChange.classList.contains("slide")){
            vid.pause();
            switchChange.classList.add("slide");
            
        } else{
            switchChange.classList.remove("slide");
            vid.play();
        }
    })
})