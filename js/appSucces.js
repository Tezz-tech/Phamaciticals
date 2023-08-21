// Success message for the appointment
document.getElementById("appName").innerHTML = `Appointment for ${localStorage.getItem("name")}`
document.getElementById("appPhy").innerHTML = `Physician Selected ${localStorage.getItem("selectPhys")}`
document.getElementById("appDate").innerHTML = `Date Selected for Appointment ${localStorage.getItem("dateInput")}`
document.getElementById("appTime").innerHTML = `Time Selected for Appointment ${localStorage.getItem("timeInput")} AM`
document.getElementById("appDura").innerHTML = `Duration of Appointment ${localStorage.getItem("durationInput")} Hours`
document.getElementById("appCost").innerHTML = `The Total Cost of this Appointment is ${localStorage.getItem("totalCost")} Naira Only`