import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { DeleteCategory, GetAllCategories } from "../axios/categoryAxios";
import { useLocation, useNavigate } from 'react-router-dom';

export const Categories = () => {
    const enterToList = async () => {
        if (list.length == 0) {
            let y = (await GetAllCategories()).data;
            setList(y)
        }
    }
    const [list, setList] = useState([])
    useEffect(() => {
        enterToList()
    },[])
    //משתנים לרענון
    const navigate = useNavigate();
    const location = useLocation();


    const f1 = async (code) => {
        debugger
        alert("אתה בטוח?")
        let y = await DeleteCategory(code)
        if (y)
        {
              //רענון
            // navigate(0); // זה ירענן את הדף הנוכחי
            const previousPath = location.pathname; // אחסון נתיב נוכחי

            navigate('/');// נווט לדף הבית

            //לאחר עיכוב שצוין, הוא מנווט בחזרה לנתיב השמור המקורי
            setTimeout(() => { // אופציונלי לרענן את הדף
                // window.history.back(); // זה יחזיר את המשתמש לדף הקודם

                navigate(previousPath); // נווט חזרה לנתיב הקודם לאחר עיכוב(50)
            }, 50);

        }
        else alert("נכשלת")
    }

    return <>
         <div className="container mt-4"><table className="table table-bordered" style={{ marginTop: '50px', textAlign: 'center' }}>
            <thead>
                <tr>
                    <th scope="col">קוד קטגוריה</th>
                    <th scope="col">שם קטגוריה</th>
                    <th scope="col">אפשריות נוספות</th>
                </tr>
            </thead>
            <tbody>
                {list.map((x, i) => (
                    <tr key={x}>
                        <td>{x.categoryCode}</td>
                        <td>{x.categoryName}</td>
                        <td> <button onClick={() => f1(x.categoryCode)}>מחק</button>
                            <Link to={`/categories/updateCategory/${x.categoryCode}`} >עדכון</Link>
                        </td>
                    </tr>
                ))}
               
            </tbody>
        </table></div>
        <Link className="btn btn-outline-dark" to={`/categories/addCategory`}>הוספת קטגוריה</Link>
        <Outlet></Outlet>
    </>

}