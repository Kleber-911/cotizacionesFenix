const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://cotizaciones.imprentafenix.com";

export default API_URL;