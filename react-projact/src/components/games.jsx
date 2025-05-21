import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { DelereGame, GetAllGames } from "../axios/GameAxios"
import { useLocation, useNavigate } from 'react-router-dom';

export const Games = () => {
   
    const [list, setList] = useState([])
    debugger
    const enterToList = async () => {
        if (list.length === 0) {
            let y = (await GetAllGames()).data;
            setList(y)
        }
    }
    useEffect(() => {
        enterToList()
    },[])

  //משתנים לרענון
  const navigate = useNavigate();
  const location = useLocation();

    const f1 = async (code) => {
        alert("אתה בטוח?")
        let y = await DelereGame(code)
        if (y) {
            alert("הצלחת")
            //רענון
           const previousPath = location.pathname; 
           navigate('/');
           setTimeout(() => { 
               navigate(previousPath);
           }, 50);
        }
        else alert("נכשלת")
    }

    return <> <div className="container mt-6"><table className="table table-bordered" style={{ marginTop: '50px', textAlign: 'center' }}>
        <thead>
            <tr>
                <th scope="col">קוד משחק</th>
                <th scope="col">שם משחק</th>
                <th scope="col">מחיר</th>
                <th scope="col">כמות</th>
                <th scope="col">קוד קטגוריה</th>
                <th scope="col">תמונה</th>
                <th scope="col">שם קטגוריה</th>
                <th scope="col">אפשריות נוספות</th>

            </tr>
        </thead>
        <tbody>
            {list.map((x, i) => (
                <tr key={x}>
                    <td>{x.gameCode}</td>
                    <td>{x.gameName}</td>
                    <td>{x.price}₪</td>
                    <td>{x.quantityInStock}</td>
                    <td>{x.categoryCode}</td>
                    <td><img width={'50px'} height={'50px'} src={`https://localhost:7252/${x.pic}`}></img></td>
                    <td>{x.categoryName}</td>
                    {<td> <button onClick={() => f1(x.gameCode)}>מחק</button>
                        {<Link to={`/games/updateGame/${x.gameCode}`} >עדכון</Link>}
                    </td>}
                </tr>
            ))}

        </tbody>
    </table></div>
        <Link className="btn btn-outline-dark" to={`/games/addGame`}>הוספת משחק</Link>
        <Outlet></Outlet>
    </>
}