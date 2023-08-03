import axios from "axios";

// function apiCall(endPoint) {
//     const instance = axios.create({
//         baseURL: `https://localhost:8082/SpringMVC/${endPoint}`, // Replace with your API base URL
//         auth: {
//             username: localStorage.getItem("email"), // Replace with your username
//             password: localStorage.getItem("password"), // Replace with your password
//         },
//         headers: {
//             'Content-Type': 'application/json', // Adjust the content type based on your API requirements
//         },
//     });
//     return instance
// }

const instance = axios.create({
    baseURL: `http://localhost:8082/SpringMVC/user`, // Replace with your API base URL
    auth: {
        username: localStorage.getItem("email"), // Replace with your username
        password: localStorage.getItem("password"), // Replace with your password
    },
    headers: {
        'Authorization' : 'Basic ' + btoa(localStorage.getItem("email") + ':' + localStorage.getItem("password")),
        'Content-Type': 'application/json', // Adjust the content type based on your API requirements
    },
});

export default instance;

// export default apiCall;