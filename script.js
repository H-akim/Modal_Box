var model_box = document.getElementById("model_box");
document.onmouseleave = function(){
    model_box.style.display = "block";
}

var close_icon = document.getElementsByClassName("close_icon");
close_icon[0].addEventListener("click", ()=>{
    model_box.style.display = "none";
})