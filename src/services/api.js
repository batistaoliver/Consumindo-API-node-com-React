import axios from "axios";

// const api = axios.create({ 
//     baseURL: "https://api.tvmaze.com/search/shows?q="
// });

// const api = axios.create({ 
//     baseURL: "https://rocketseat-node.heroku.com/api"
// });

const api = axios.create({ 
    baseURL: "http://localhost:3001/api"
});

export default api;