// Succes message for the diagnosis
document.getElementById("dia").innerHTML = `You're Likely Diagnosised with ${localStorage.getItem("diagnosis")}`
document.getElementById("pre").innerHTML = `You're Are Adviced To ${localStorage.getItem("prescription")}` 