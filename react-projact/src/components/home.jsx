import { useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { GetAllGames } from "../axios/GameAxios"
import MyContex from "../contex"

export const Home = () => {
    const sal = useContext(MyContex).sal
    const setsal = useContext(MyContex).setsal
    const addtosal = ({
        "gameCode": 0,
        "gameName": "string",
        "price": 0,
        "quantity": 0,
        "finalPrice": 0
    })

    const [list, setList] = useState([])
    const enterToList = async () => {
        if (list.length === 0) {
            let y = (await GetAllGames()).data;
            setList(y)
        }
    }
    useEffect(() => { enterToList() }, [])

    const f1 = (g) => {
        const f = sal.find(x => x.gameCode == g.gameCode) || null
        if (f == null) {
            addtosal.gameCode = g.gameCode
            addtosal.gameName = g.gameName
            addtosal.price = g.price
            addtosal.quantity = 1
            addtosal.finalPrice = g.price
            setsal([...sal, addtosal])
        }
    }
    return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '5px', marginTop: '100px' }}>
        {list.map((g, i) => (
            <div className="container mt-3" key={i}>
                <div className="card" style={{ width: '220px', height: '200px' }}>
                    <div className="card-body">
                        <h4 className="card-title">{g.gameName}</h4>
                        <p className="card-text">{g.price}₪</p>
                        <Link className="btn btn-outline-dark" to={`/home/more/${g.gameCode}`}>פרטים נוספים</Link>
                        <button className="btn btn-outline-dark" onClick={() => f1(g)}>הוסף לסל</button>

                    </div>
                </div>
            </div>
        ))}
        <Outlet></Outlet>
    </div>

}