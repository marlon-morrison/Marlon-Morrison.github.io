let slideIndex = 1;
let lang = document.getElementById("lang-select")
function langForm(){
    let langS = document.getElementById("lang-select").value;
    let jScript = document.getElementsByClassName("javascript")[0];
    let html = document.getElementsByClassName("html")[0];
    let c = document.getElementsByClassName("cPP")[0];
    let py = document.getElementsByClassName("python")[0];
    let java = document.getElementsByClassName("java")[0];
    let vStudio = document.getElementsByClassName("visualS")[0];
    
    jScript.style.display = "none";
    html.style.display = "none";
    c.style.display = "none";
    py.style.display = "none";
    java.style.display = "none";
    vStudio.style.display = "none";

    return eval(langS).style.display = "block";

}

if (lang == null) {
    showSlides(slideIndex);
} else {
    lang.addEventListener("change", langForm);   
}
console.log(lang);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }else if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    console.log(lang);
    slides[slideIndex-1].style.display = "block";
}
