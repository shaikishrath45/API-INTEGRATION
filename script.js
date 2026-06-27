const countryDetails = {

    India: {
        currency: "Indian Rupee (INR)",
        population: "1,428,627,663",
        region: "Asia",
        languages: "Hindi, English",
        timezone: "UTC+05:30",
        flag: "🇮🇳"
    },

    Japan: {
        currency: "Japanese Yen (JPY)",
        population: "123,294,513",
        region: "Asia",
        languages: "Japanese",
        timezone: "UTC+09:00",
        flag: "🇯🇵"
    },

    China: {
        currency: "Chinese Yuan (CNY)",
        population: "1,419,321,278",
        region: "Asia",
        languages: "Chinese",
        timezone: "UTC+08:00",
        flag: "🇨🇳"
    },

    "South Korea": {
        currency: "South Korean Won (KRW)",
        population: "51,717,590",
        region: "Asia",
        languages: "Korean",
        timezone: "UTC+09:00",
        flag: "🇰🇷"
    },

    "United Arab Emirates": {
        currency: "UAE Dirham (AED)",
        population: "9,516,871",
        region: "Asia",
        languages: "Arabic",
        timezone: "UTC+04:00",
        flag: "🇦🇪"
    },

    "Saudi Arabia": {
        currency: "Saudi Riyal (SAR)",
        population: "36,947,025",
        region: "Asia",
        languages: "Arabic",
        timezone: "UTC+03:00",
        flag: "🇸🇦"
    },

    France: {
        currency: "Euro (EUR)",
        population: "68,042,591",
        region: "Europe",
        languages: "French",
        timezone: "UTC+01:00",
        flag: "🇫🇷"
    },

    Germany: {
        currency: "Euro (EUR)",
        population: "84,482,267",
        region: "Europe",
        languages: "German",
        timezone: "UTC+01:00",
        flag: "🇩🇪"
    },

    Italy: {
        currency: "Euro (EUR)",
        population: "58,870,763",
        region: "Europe",
        languages: "Italian",
        timezone: "UTC+01:00",
        flag: "🇮🇹"
    },

    Spain: {
        currency: "Euro (EUR)",
        population: "48,592,909",
        region: "Europe",
        languages: "Spanish",
        timezone: "UTC+01:00",
        flag: "🇪🇸"
    },

    "United Kingdom": {
        currency: "Pound Sterling (GBP)",
        population: "69,138,192",
        region: "Europe",
        languages: "English",
        timezone: "UTC+00:00",
        flag: "🇬🇧"
    },

    Russia: {
        currency: "Russian Ruble (RUB)",
        population: "144,820,423",
        region: "Europe/Asia",
        languages: "Russian",
        timezone: "UTC+03:00",
        flag: "🇷🇺"
    },

    "United States": {
        currency: "US Dollar (USD)",
        population: "341,814,420",
        region: "North America",
        languages: "English",
        timezone: "UTC−05:00",
        flag: "🇺🇸"
    },

    Canada: {
        currency: "Canadian Dollar (CAD)",
        population: "40,769,890",
        region: "North America",
        languages: "English, French",
        timezone: "UTC−05:00",
        flag: "🇨🇦"
    },

    Mexico: {
        currency: "Mexican Peso (MXN)",
        population: "131,946,900",
        region: "North America",
        languages: "Spanish",
        timezone: "UTC−06:00",
        flag: "🇲🇽"
    },

    Brazil: {
        currency: "Brazilian Real (BRL)",
        population: "212,583,750",
        region: "South America",
        languages: "Portuguese",
        timezone: "UTC−03:00",
        flag: "🇧🇷"
    },

    Argentina: {
        currency: "Argentine Peso (ARS)",
        population: "46,621,847",
        region: "South America",
        languages: "Spanish",
        timezone: "UTC−03:00",
        flag: "🇦🇷"
    },

    Australia: {
        currency: "Australian Dollar (AUD)",
        population: "27,309,396",
        region: "Oceania",
        languages: "English",
        timezone: "UTC+10:00",
        flag: "🇦🇺"
    },

    "New Zealand": {
        currency: "New Zealand Dollar (NZD)",
        population: "5,338,900",
        region: "Oceania",
        languages: "English, Māori",
        timezone: "UTC+12:00",
        flag: "🇳🇿"
    },

    "South Africa": {
        currency: "South African Rand (ZAR)",
        population: "63,212,384",
        region: "Africa",
        languages: "Zulu, Xhosa, English",
        timezone: "UTC+02:00",
        flag: "🇿🇦"
    }
};
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async () => {

    const country = document.getElementById("countryInput").value.trim();

    if (!country) {
        alert("Please enter a country name");
        return;
    }

    document.getElementById("countryInfo").innerHTML =
        "<h2>Loading...</h2>";

    try {

        const response = await fetch(
            "https://countriesnow.space/api/v0.1/countries/capital"
        );

        const data = await response.json();

        const countries = data.data;

        const result = countries.find(
            item => item.name.toLowerCase() === country.toLowerCase()
        );

        if (!result) {
            document.getElementById("countryInfo").innerHTML =
                "<h2>Country not found!</h2>";
            return;
        }

       
        const extra = countryDetails[result.name];

        if (!extra) {
            document.getElementById("countryInfo").innerHTML = `
                <div class="country-card">
                    <h2>🌍 ${result.name}</h2>
                    <p><strong>Capital:</strong> ${result.capital}</p>
                    <p>Detailed information not available.</p>
                </div>
            `;
            return;
        }

        document.getElementById("countryInfo").innerHTML = `
            <div class="country-card">

                <h2>${extra.flag} ${result.name}</h2>

                <p><strong>Country:</strong> ${result.name}</p>

                <p><strong>Capital:</strong> ${result.capital}</p>

                <p><strong>Currency:</strong> ${extra.currency}</p>

                <p><strong>Population:</strong> ${extra.population}</p>

                <p><strong>Region:</strong> ${extra.region}</p>

                <p><strong>Languages:</strong> ${extra.languages}</p>

                <p><strong>Time Zone:</strong> ${extra.timezone}</p>

            </div>
        `;

    } catch (error) {

        document.getElementById("countryInfo").innerHTML =
            "<h2>❌ Error fetching data</h2>";

        console.error(error);

    }

});