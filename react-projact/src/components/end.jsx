import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { addShopping } from "../axios/ShoppingAxios"
import { getAllCustomers, ifExist } from "../axios/customerAxios"
import { AddSal } from "../axios/ShoppingDetailAxios"
import MyContex from "../contex"

export const End = () => {

    const [cust, setcust] = useState({})
    const mynevigat = useNavigate()
    const sal = useContext(MyContex).sal
    const setCurrentCustomer = useContext(MyContex).setcurrentCustomer
    const currentCustomer = useContext(MyContex).currentCustomer
    const concat = useContext(MyContex).concat

    const [add, setadd] = useState({
        "shoppingCode": 0,
        "custCode": 0,
        "shoppingDate": "2025-01-05T15:41:36.736Z",
        "shoppingSum": 0
    })

    const f2 = async () => {
        debugger
        if(concat){
            cust.name=currentCustomer.name
            cust.pass=currentCustomer.pass
        }
        let y = await ifExist(cust.name, cust.pass)
        if (y.data) {
            let l = await getAllCustomers()
            if (l.data) {
                cust.code = l.data.find(c => c.custName == cust.name && c.pass == cust.pass).custCode
                addToShopping(cust.code)
            }
        }
        else {
            alert("אינך רשום במערבת ,הינך מועבר לרישום")
            mynevigat('/rishum')
        }
    }
    let codeShoping
    const addToShopping = async (code) => {
        debugger
        let sum = 0
        for (let i = 0; i < sal.length; i++)
            sum += sal[i].price
        add.shoppingSum = sum
        add.custCode = code
        codeShoping = await addShopping(add)
        if (codeShoping.data) {
            alert("נרשם במערכת")
            debugger
             addToShoppingDetail()
        }
        else {
            alert("נכשלת")
        }
    }
    const addToShoppingDetail = async () => {
        debugger
        let y = await AddSal(codeShoping.data, sal)
        if (y.data) {
            alert("נרשם במערכת")
            let sum=0
            for(let i=0;i<sal.length;i++)
                sum+=sal[i].finalPrice
            mynevigat(`/pay/${sum}`)

        }
        else {
            alert("נכשלת")
        }
    }

    return <div>
        {!concat && <>  <input type={'text'} placeholder="שם" onBlur={(e) => setcust({ ...cust, name: e.target.value })} />
            <input type={'password'} placeholder="סיסמא" onBlur={(e) => setcust({ ...cust, pass: e.target.value })} />
            <input type={'button'} onClick={() => f2()} value="שמור" /></>}
        {concat && <>
            <input type={'button'} onClick={() => f2()} value="סיום קניה" /></>}

    </div>
}