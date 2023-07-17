import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-6f5d5-default-rtdb.firebaseio.com/'
})