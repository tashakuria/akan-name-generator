document.getElementById("akanForm").addEventListener("submit", function (e){preventDefault()})

const dateInput = document.getElementById("date")
const gender = document.getElementById("gender")

 if ( dateInput === "") {
    document.getElementById("result").innerText = "enter birthdate"; return
 }
 if (gender ==="") {
    document.getElementById("result").innerText = "select your gender"; return
 }
 const date = new Date(dateInput)
 const day = date.getDate()
 const month = date.getMonth()
 const year = date.getFullYear()

 const cc = Math.floor(year/100)
 const yy = year % 100

 const d = Math.floor(
    ((cc/4-2*cc-1) + (5*yy/4) + (26*(month+1)/10)+day)%7)

 const dayIndex = ((d+7) % 7)
 const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
 const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
 
 let akanName;
 if (gender === "male"){
    akanName = maleNames[dayIndex]
 }
 if (gender === "female"){
    akanName = femaleNames[dayIndex]
 }
 document.getElementById("result").innerText='your Akan name is :${akanName}'