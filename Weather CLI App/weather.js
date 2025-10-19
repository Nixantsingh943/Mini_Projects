import axios from "axios";
import readline from "readline";
import dotenv from "dotenv";

dotenv.config();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = async (city) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: city,
                appid: API_KEY,
                units: "metric"
            }
        });

        const data = response.data;
        console.log("\n Weather Info ");
        console.log(`City: ${data.name}, ${data.sys.country}`);
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Feels Like: ${data.main.feels_like}°C`);
        console.log(`Weather: ${data.weather[0].description}`);
        console.log(`Humidity: ${data.main.humidity}%`);
        console.log(`Wind Speed: ${data.wind.speed} m/s\n`);
    } catch (error) {
        console.log("❌ Error fetching weather data. Please check the city name or API key.");
    } finally {
        rl.close();
    }
};

rl.question("Enter city name: ", (city) => {
    getWeather(city);
});

