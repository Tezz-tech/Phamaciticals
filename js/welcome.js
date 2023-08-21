//Getting the name for the welcome page
let welname = localStorage.getItem("name");
document.getElementById("welcome").innerHTML = `Welcome ${welname}`;