// To save and get details for the appointment
function saveAppoint() {
    let physician = document.getElementById("physician");
    let selectPhys = physician.value
    let dateInput = document.getElementById("dateInput").value;
    let timeInput = document.getElementById("timeInput").value;
    let durationInput = document.getElementById("durationInput").value;
    let costPerHour = 10000;
    let totalCost = durationInput * costPerHour
    localStorage.setItem("selectPhys", selectPhys);
    localStorage.setItem("dateInput", dateInput);
    localStorage.setItem("timeInput", timeInput);
    localStorage.setItem("durationInput", durationInput);
    localStorage.setItem("totalCost", totalCost);

    // Validation
    if (physician == "" || dateInput == "" || timeInput == "" || durationInput == "") {
        document.getElementById("error").innerHTML = "*Please All Fields Are Required*"
    }else{
        window.location.href = "appointSuccess.html"
    }
}