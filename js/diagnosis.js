// getting symptoms
function getSymptoms(event) {   
   let symptoms = document.getElementById("symptoms").value;
   if (symptoms.includes("headache")) {
    var diagnosis = "Migraine"
    var prescription = "Take Panadol if avaliable and rest in a quite and dark room"
   } else if (symptoms.includes("fever")) {
    var diagnosis = "Flu"
    var prescription = "Get a Fever drug In a Pharmacy, Drink plenty of water and rest"
   }else if (symptoms.includes("cough")){
    var diagnosis = "Bronchitis"
    var prescription = "Take a cough drug, Drink a lot of water and get plenty of Rest"
   }else if (symptoms.includes("pains")){
    var diagnosis = "Ache"
    var prescription ="Take a pain Killer, Drink a lot of water and Rest"
   }else{
    var diagnosis = "Something To The System Unkown"
    var prescription = "Please Consult A Health Care Professional"
   }
   // saiving the diagnosis and prescription
   localStorage.setItem("diagnosis", diagnosis)
   localStorage.setItem("prescription", prescription)

   // Validation
   if (symptoms == "") {
    document.getElementById("error2").innerHTML = "*Please Fill In The Input*"
   }else{
    window.location.href = "digSuccess.html"
   }
}