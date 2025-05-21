import { useEffect, useState } from "react"
import { GetAllCategories } from "../axios/categoryAxios"
import { addGame } from "../axios/GameAxios"
import { useLocation, useNavigate } from 'react-router-dom';

export const AddGame = () => {
    const [obj, setobj] = useState({
        "gameCode": 0,
        "gameName": "string",
        "price": 0,
        "quantityInStock": 0,
        "categoryCode": 0,
        "pic": "string",
        "categoryName": "string"
    })
    const enterToList = async () => {
        if (list.length == 0) {
            let y = (await GetAllCategories()).data;
            setList(y)
        }
    }
    const [list, setList] = useState([])
    useEffect(() => {
        enterToList()
    }, [])

    //משתנים לרענון
    const navigate = useNavigate();
    const location = useLocation();

    const f1 = async () => {
        let y = await addGame(obj)
        if (y) {
            //רענון
            const previousPath = location.pathname;
            navigate('/');
            setTimeout(() => {
                navigate(previousPath);
            }, 50);
        }
        else {
            alert("נכשלת")
        }
    }
    return <div className="container mt-5 d-flex justify-content-center">
        <br></br>
        <div className="card" style={{ width: '400px', borderColor: '#007bf', borderWidth: '2px', borderStyle: 'solid' }}>{/*#ffa500*/}
            <div className="card-body">
                <h5 className="card-title">הוספת משחק</h5>
                <div className="mb-3">
                    <input type={'text'} className="form-control" onBlur={(e) => setobj({ ...obj, gameName: e.target.value })} placeholder={'name'}></input>
                </div>
                <div className="mb-3">
                    <select className="form-select" aria-label="Default select example" onBlur={(e) => setobj({ ...obj, categoryCode: e.target.value })}>
                        {list.map((x, i) => (<option value={x.categoryCode}>{x.categoryName} code: {x.categoryCode}</option>))}
                    </select>                    </div>
                <div className="mb-3">
                    <input type={'number'} className="form-control" onBlur={(e) => setobj({ ...obj, price: e.target.value })} placeholder={'price'}></input>
                </div>
                <div className="mb-3">
                    <input type={'text'} className="form-control" onBlur={(e) => setobj({ ...obj, gamesImg: e.target.value })} placeholder={'img'}></input>
                </div>
                <div className="mb-3">
                    <input type={'number'} className="form-control" onBlur={(e) => setobj({ ...obj, pic: e.target.value })} placeholder={'amount'}></input>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <input type={'button'} className="btn btn-outline-primary" onClick={() => f1()} value="שמור"></input>
                </div>
                {/* </form> */}
            </div>
        </div>
        <br></br><br></br><br></br>
    </div>
}