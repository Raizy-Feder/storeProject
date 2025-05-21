import axios from "axios"

const url="https://localhost:7252/api/Shopping/"


//הוספה קניה
export const addShopping=(obj)=>{
    return axios.post(`${url}Save`,obj) 
}
//קבלת קניה לפי קוד
export const GetShoppingByCode=(code)=>{
    return axios.get(`${url}GetShoppingByCustCode?custCode=${code}`) 
}
