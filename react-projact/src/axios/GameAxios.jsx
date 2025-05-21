import axios from "axios"

const url="https://localhost:7252/api/Game/"

export const GetAllGames=()=>{
    return axios.get(`${url}GetAllGames`) 
}
//שליפה משחק לפי קוד
export const GetGameByCode=(code)=>{
    return axios.get(`${url}GetGameByCode/${code}`) 
}
// שליפה משחק לפי קוד קטגוריה
export const GetGamsByCategoyCode=(code)=>{
    return axios.get(`${url}GetGamsByCategoyCode/${code}`) 
}
//הוספה משחק
export const addGame=(obj)=>{
    return axios.post(`${url}AddGame`,obj) 
}
//עדכון משחק
export const updateGame=(code,obj)=>{
    return axios.put(`${url}UpdateGame/${code}`,obj) 
} 
//מחיקת משחק
export const DelereGame=(code)=>{
    return axios.delete(`${url}DelereGame/${code}`) 
}