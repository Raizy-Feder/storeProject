import axios from "axios"

const url="https://localhost:7252/api/ShoppingDetail/"


//הוספה קניה
export const AddSal=(code,sal)=>{
    return axios.post(`${url}AddSal?code=${code}`, sal);
}

export const GetShoppingByShoppingCode=(code)=>{
    return axios.get(`${url}GetShoppingDetailByCodeShopping?code=${code}`);
}