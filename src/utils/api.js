import axios from "axios";
// Yapılan her istekte geçerli olmasını istediğimiz ayarları tanımladığımız bir axios örneği oluşturalım.
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,

    headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'yt-api.p.rapidapi.com',
    },
});
export default api;

