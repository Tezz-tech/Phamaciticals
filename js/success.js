// Getting Items from local storage for the success page
document.getElementById("name1").innerHTML= `Full Name:  ${localStorage.getItem("name")}`
document.getElementById("bloodGroup1").innerHTML= `Blood Group:  ${localStorage.getItem("bloodGroup")}`
document.getElementById("genotype1").innerHTML= `Genotype :  ${localStorage.getItem("genotype")}`
document.getElementById("username2").innerHTML= `Username :  ${localStorage.getItem("username")}`