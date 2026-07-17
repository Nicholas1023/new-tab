const API_KEY = import.meta.env.VITE_NASA_API_KEY;

let date = new Date();
date.setDate(date.getDate() - 1); 
let day = date.getDate();
let year = date.getFullYear();
let month = date.getMonth() + 1;

fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${year}-${month}-${day}`).then(response => response.json()).then(data => {
    document.body.background=data.url;
    document.getElementById("imageCopyright").textContent=`Attribution: Background image from NASA APOD API. Image copyright: ${data.copyright}`;
});

let searchEngine = document.getElementById("searchURL");
document.getElementById("searchBar").placeholder = `Search anything on ${searchEngine.options[searchEngine.selectedIndex].text}...`

searchEngine.addEventListener("change", function(e) {
    document.getElementById("searchBar").placeholder = `Search anything on ${e.target.options[e.target.selectedIndex].text}...`
});

document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault();
})

function time() {
    let displayDate = new Date();
    month = displayDate.getMonth() + 1;
    let monthName = "";
    if (month == 1) {
        monthName = "January";
    } else if (month == 2) {
        monthName = "February";
    } else if (month == 3) {
        monthName = "March";
    } else if (month == 4) {
        monthName = "April";
    } else if (month == 5) {
        monthName = "May";
    } else if (month == 6) {
        monthName = "June";
    } else if (month == 7) {
        monthName = "July";
    } else if (month == 8) {
        monthName = "August";
    } else if (month == 9) {
        monthName = "September";
    } else if (month == 10) {
        monthName = "October";
    } else if (month == 11) {
        monthName = "November";
    } else if (month == 9) {
        monthName = "December";
    }
    document.getElementById("time").innerHTML = `Time now: ${displayDate.getDate()} ${monthName} ${displayDate.getFullYear()}, ${displayDate.toLocaleTimeString()}`;
};

setInterval(time, 500);