import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { GetShoppingByShoppingCode } from "../axios/ShoppingDetailAxios"

export const PrivateMore = () => {

    const code = useParams().code
    const navigate = useNavigate()
    const [detailslist, setdetailList] = useState([])

    const enterToList = async () => {
        debugger
        if (detailslist.length === 0) {
            let y = (await GetShoppingByShoppingCode(code)).data;
            setdetailList(y)
        }
    }
    useEffect(() => { enterToList() }, [])

    const handleClose = () => {
        navigate("/private");
    };
    return <><div style={{
        position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex',
        justifyContent: 'center', alignItems: 'center', zIndex: '1000'
    }}><div style={{
        backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '80%', maxWidth: '600px'
    }}>
            <h1>קוד קניה: {code}</h1>
            <div className="container mt-4"><table className="table table-bordered" style={{ marginTop: '50px', textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th scope="col">קוד פרטי קניה </th>
                        <th scope="col">קוד משחק </th>
                        <th scope="col">כמות </th>
                        <th scope="col">תמונה </th>
                    </tr>
                </thead>
                <tbody>
                    {detailslist.map((x, i) => (
                        <tr key={x}>
                            <td> {x.shoppingDetailsCode}</td>
                            <td>{x.gameCode}</td>
                            <td>{x.qty}</td>
                            <td><img src={`https://localhost:7252/${x.pic}`} width={'50px'} height={'50px'}></img></td>
                        </tr>
                    ))}
                </tbody>
            </table></div>
            <button onClick={handleClose} style={{ marginTop: '20px' }} className="btn btn-outline-dark">חזור</button>
        </div>
    </div>
    </>
}