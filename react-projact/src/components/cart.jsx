import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import MyContex from "../contex"
import { useLocation, useNavigate } from 'react-router-dom';

export const Cart = () => {
    const sal = useContext(MyContex).sal
    const setsal = useContext(MyContex).setsal

    //משתנים לרענון
    const navigate = useNavigate();
    const location = useLocation();

    const f1 = (code) => {
        const s = sal.find(x => x.gameCode === code)
        s.quantity = s.quantity + 1
        s.finalPrice = s.finalPrice + s.price
        const previousPath = location.pathname;
        navigate('/');
        setTimeout(() => {
            navigate(previousPath);
        }, 50);
    }
    const f2 = (code) => {
        const s = sal.find(x => x.gameCode === code)
        s.quantity = s.quantity - 1
        s.finalPrice = s.finalPrice - s.price
        if (s.quantity === 0) {
            setsal(prevItems =>
                prevItems.filter((item, index) => item.gameCode !== code))
        }
        const previousPath = location.pathname;
        navigate('/');
        setTimeout(() => {
            navigate(previousPath);
        }, 50);
    }
    const f3 = (code) => {
        const s = sal.filter(x => x.gameCode !== code)
        setsal(s)
        const previousPath = location.pathname;
        navigate('/');
        setTimeout(() => {
            navigate(previousPath);
        }, 50);
    }

    return <> <div className="container mt-6"><table className="table table-bordered" style={{ marginTop: '50px', textAlign: 'center' }}>
        <thead>
            <tr>
                <th scope="col">קוד משחק</th>
                <th scope="col">שם משחק</th>
                <th scope="col">מחיר</th>
                <th scope="col">כמות</th>
                <th scope="col">מחק</th>
            </tr>
        </thead>
        <tbody>
            {sal.map((x, i) => (
                <tr key={x}>
                    <td>{x.gameCode}</td>
                    <td>{x.gameName}</td>
                    <td>{x.price}₪</td>
                    <td>{x.quantity}</td>
                    <td>{x.finalPrice}</td>

                    {<td> <button onClick={() => f1(x.gameCode)}>plus</button>
                        <button onClick={() => f2(x.gameCode)}>מינוס</button>
                        <button onClick={() => f3(x.gameCode)}>🗑️</button>
                    </td>}
                </tr>
            ))}

        </tbody>
    </table></div>

        <Link type={'button'} to={`/end`} >סיום קניה</Link>
    </>


}