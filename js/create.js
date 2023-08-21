//Sign up page
document.getElementById("form1").addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let age = document.getElementById("dob").value;
  let bloodGroup = document.getElementById("bloodGroup").value;
  let genotype = document.getElementById("genotype").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  //store in local storage
  localStorage.setItem("name", name);
  localStorage.setItem("age", age);
  localStorage.setItem("bloodGroup", bloodGroup);
  localStorage.setItem("genotype", genotype);
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  //validation
  if (
    name !== "" &&
    age !== "" &&
    bloodGroup !== "" &&
    genotype !== "" &&
    username !== "" &&
    password !== ""
  ) {
    window.location.href = "success.html";
  } else {
    document.getElementById("require").innerHTML = "*Please Fill All Inputs*";
  }
});