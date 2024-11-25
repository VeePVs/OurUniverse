import config from "../../config";

async function getAPOD(startDate, endDate) {
    try {
        const response = await fetch(`${config.API_APOD_URL}?api_key=${config.API_TOKEN}&start_date=${startDate}&end_date=${endDate}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error in request:", error);
    }
}

export {getAPOD}