import axios from "axios"

const url="https://localhost:7252/api/Customer/"

//כל הלקוחות
export const getAllCustomers=()=>{
    return axios.get(`${url}GetAllCustomers`) 
}


//בדיקה האם קיים לקוח
export const ifExist=(name,pass)=>{
    return axios.get(`${url}IfExist`,{
        params:{
            name:name,
            pass,pass
        }
    }); 
}
//  הוספה לקוח
export const addCustomer=(obj)=>{
    return axios.post(`${url}AddCustomer`,obj) 
}



