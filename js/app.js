var lform = document.forms['langForm'];
lform.onsubmit = function(event){
    event.preventDefault();
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