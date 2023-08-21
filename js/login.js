//Login
document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();
  
    //get the inputs
    let username = document.getElementById("username1").value;
    let password = document.getElementById("password1").value;
  
    //get local storage
    let user = localStorage.getItem("username");
    let pass = localStorage.getItem("password");
  
    //Validate username and password
  
    if (username == "" && password == "") {
      document.getElementById("vallPass").innerHTML =
        "*Invalid Username/Password Error*";
    }
  
    if (username === user && password === pass) {
      window.location.href = "welcome.html";
    } else {
      document.getElementById("vallPass").innerHTML =
        "*Invalid Username/Password Error*";
    }
  });  