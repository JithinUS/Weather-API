// e247e2a7902b8024fbe51478cdafa2ca
// api.openweathermap.org/data/2.5/find?q=London&units=metric
// api.openweathermap.org/data/2.5/weather?q=thrissur&units=metric&appid=e247e2a7902b8024fbe51478cdafa2ca

function fetchWeather(){
    div33.style.backgroundColor = "black";
    document.getElementById("div33").style.backgroundImage = "url('vincent-burkhead-LhlxYMfnTF0-unsplash')";
    let placeName=place.value
    url=`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&units=metric&appid=e247e2a7902b8024fbe51478cdafa2ca`
    fetch(url).then(res=>res.json()).then(data=>displayData(data))
    
}
function displayData(data) {
    let temperature=data.main.temp   //accessing array element
    let country_name = data.sys.country
    let humidity=data.main.humidity
    let pressure=data.main.pressure
    let level=data.main.sea_level
    name1.innerHTML=place.value
    c_name.innerHTML=`<p>Country : <b>${country_name}</b></p>`
    temp.innerHTML=`<p>Temperature :<b> ${temperature}</b></p>`
    hum.innerHTML=`<p>Humidity :<b> ${humidity}</b></p>`
    pre.innerHTML=`<p>Pressur :<b> ${pressure}</b></p>`
    lev.innerHTML=`<p>Sea Level:<b> ${level}</b></p>`
    
}