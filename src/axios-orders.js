import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-my-burger-app-660cf.firebaseio.com/",
});

export default instance;
