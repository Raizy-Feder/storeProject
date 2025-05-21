import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAllCustomers } from "../axios/customerAxios";
import { GetShoppingByCode } from "../axios/ShoppingAxios";
import MyContex from "../contex";

export const Private = () => {

    const cust = useContext(MyContex).currentCustomer

    const allshoppings = async () => {
        if (list.length === 0) {
            let l = await getAllCustomers()
            let code = l.data.find(x => x.pass === cust.pass)
            code = code.custCode
            let y = (await GetShoppingByCode(code)).data;
            if (y) {
                setList(y)
            }
            else
                alert("נכשל")
        }
    }
    const [list, setList] = useState([])
    useEffect(() => {
        allshoppings()
    }, [])

    return <table className="table table-bordered" style={{ marginTop: '50px', textAlign: 'center' }}>
        <thead>
            <tr>
                <th scope="col">קוד קניה</th>
                <th scope="col">תאריך קניה</th>
                <th scope="col">פרטים נוספים</th>
            </tr>
        </thead>
        <tbody>
            {list.map((x, i) => (
                <tr key={x}>
                    <td>{x.shoppingCode}</td>
                    <td>{x.shoppingDate}</td>
                    <td>
                        <Link className="btn btn-outline-dark" to={`privateMore/${x.shoppingCode}`}>פרטים נוספים</Link>
                    </td>
                </tr>
            ))}

        </tbody>
        <Outlet></Outlet>
    </table>
}
