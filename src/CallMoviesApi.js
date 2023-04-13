import axios from "axios"

const showsApi =  "https://api.tvmaze.com/shows"

const getShows = async() =>{
    const res = await axios.get(showsApi)
    return res.data
}


export {getShows}