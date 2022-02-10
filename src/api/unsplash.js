import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID SRn-K9RSUb3xeIsRKamKviBXSE2h0TaV05Y5U0utWYk'
    }
});