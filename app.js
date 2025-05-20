const API_KEY = "0fc9bb8c07e2aa3f83e2b1649c4df6df";

const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener("click", async () => {
    const city = document.getElementById("city").value;

    if (city === "") {
        result.innerText = "Please enter your city name";
        return;
    }

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        result.innerText = 'Loading...';
        const response = await fetch(URL);
        const data = await response.json();

        if (data.cod === 200) {
            const temp = data.main.temp;
            const desc = data.weather[0].description;

            result.innerText = `🌡️ Temp in ${city}: ${temp}°C\n⛅ Weather: ${desc}`;

            // Change background based on temperature
            if (temp < 15) {
                document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/scenic-view-snowcapped-mountains-against-sky_1048944-25603816.jpg?ga=GA1.1.890357905.1724680978&semt=ais_hybrid&w=740')";
            } else if (temp <= 30) {
                document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/scenic-view-field-against-sky_1048944-25440105.jpg?ga=GA1.1.890357905.1724680978&semt=ais_hybrid&w=740')";
            } else {
                document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/827799400/photo/residential-street-under-a-buttermilk-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=KPMtQox9FhumVyc-T-La4m88cyo4VDE-P26V0RN3TC4=')";
            }

        } else {
            result.innerText = "City not found";
        }

    } catch (error) {
        result.innerText = "Something went wrong";
        console.log("Error:", error);
    }
});
