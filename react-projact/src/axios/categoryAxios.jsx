import axios from "axios"

const url="https://localhost:7252/api/Category/"

//שליפה  כל הקטגוריות
export const GetAllCategories=()=>{
    return axios.get(`${url}GetAllCategories`) 
}


//שליפה קטגוריה לפי קוד
export const GetCategoryByCode=(code)=>{
    return axios.get(`${url}GetCategoriesByCode/${code}`) 
}
//הוספה קטגוריה
export const addCategory=(obj)=>{
    return axios.post(`${url}AddCategory`,obj) 
}
//עדכון קטגוריה
export const updateCategoryu=(code,obj)=>{
    return axios.put(`${url}UpdateCategory/${code}`,obj) 
}
//מחיקת קטגוריה
export const DeleteCategory=(code)=>{
    return axios.delete(`${url}DeleteCategory/${code}`) 
}
