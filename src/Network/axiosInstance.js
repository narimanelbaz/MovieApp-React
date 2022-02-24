import axios from "axios";

export const axiosInatance = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=0e994d4cb38598ce88b1c98b9de848e1"
})