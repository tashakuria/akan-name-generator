document.getElementById("akanForm").addEventListener("submit",function (event){
   event.preventDefault()
   const dateInput = document.getElementById("date")
   const genderInput = document.getElementById("gender")
   const result = document.getElementById("result")

   const dateValue = dateInput.value
   const genderValue = genderInput.value

   if (dateValue === "") {
      result.innerText = "enter your birthdate"
      return
   }
   if (genderValue === ""){
      result.innerText = "select your gender"
      return
   }
   const date = new Date(dateValue)
   const day = date.getDay()

   const maleName = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
   const femaleName = ["Akosua","Adwoa","Abena","Akua","Yaa","Afua","Ama"]

   let akanName = ""

   if (genderValue === "male") {
      akanName = maleNames[day]
   } else if (genderValue === "female") {
      akanName = femaleName[day]
   }
   result.innerText = `Your Akan name is:${akanName}`
})