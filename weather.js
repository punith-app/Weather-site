    const apikey ="455841ba7ba8325895836bd8f646aefd";
    const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const search =document.querySelector(".serch input")
    
    const searchbtn =document.querySelector(".serch button")
    const weathericon =document.querySelector(".weather-icon")

    async function weathercheck(city) {
           const response = await fetch(apiurl + city + `&appid=${apikey}`)
           var data = await response.json()

           

           if(response.status==404){
            document.querySelector(".error").style.display ="block"
            document.querySelector(".weather").style.display="none"

           }
           else{
            document.querySelector(".city").innerHTML =data.name
           document.querySelector(".temp").innerHTML =Math.round(data.main.temp ) +"°C" 
           document.querySelector(".humidety").innerHTML =data.main.humidity +"%"
           document.querySelector(".wind").innerHTML =data.wind.speed +"km/h"

           
            if(data.weather[0].main =="Clouds"){
            weathericon.src ="images/clouds.png"
           }

           else if(data.weather[0].main=="Clear"){
            weathericon.src ="images/clear.png";
           }

           else if(data.weather[0].main=="Rain"){
            weathericon.src ="images/rain.png";

           }

           else if(data.weather[0].main=="Drizzle"){
            weathericon.src ="images/drizzle.png";

           }

           else if(data.weather[0].main=="Mist"){
            weathericon.src ="images/mist;.png"

           }

           document.querySelector(".weather").style.display="block"
           document.querySelector(".error").style.display ="none"


    }


           }

           

    searchbtn.addEventListener("click", () =>{
        weathercheck(search.value)

    })