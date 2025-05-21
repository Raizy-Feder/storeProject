import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GetGameByCode } from "../axios/GameAxios";

export const MoreDetailes = () => {

    const [list, setList] = useState([])
    const navigate = useNavigate()
    let code = useParams().code
    const enterToList = async () => {
        if (list.length === 0) {
            let y = (await GetGameByCode(code)).data;
            setList(y)
        }
    }
    useEffect(() => {
        enterToList()
    }, [])
    const handleClose = () => {
        navigate("/home");
    };
    return <div style={{
        position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex',
        justifyContent: 'center', alignItems: 'center', zIndex: '1000'
    }}><div style={{
        backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '80%', maxWidth: '600px'
    }}>
            <h2>{list.gamesName}</h2>
            <p><strong>מחיר:</strong> {list.price}$</p>
            <p><strong>קוד מוצר:</strong> {list.gameCode}</p>
            <p><strong>קוד קטגוריה:</strong> {list.categoryCode}</p>
            <img src={`https://localhost:7252/${list.pic}`} style={{ width: '100%', height: '400px' }} ></img>
            <button onClick={handleClose} style={{ marginTop: '20px' }} className="btn btn-outline-dark">חזור</button>
        </div>
    </div>

}