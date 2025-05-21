import { useState } from "react"
import { addCategory } from "../axios/categoryAxios"
import { useLocation, useNavigate } from 'react-router-dom';

export const AddCategory = () => {

    const [obj, setobj] = useState({
        "categoryCode": 0,
        "categoryName": ""

    })
    //משתנים לרענון
    const navigate = useNavigate();
    const location = useLocation();

    ///פעולה שתפעיל את הפונקציה שמוסיפה לשרת
    const f1 = async () => {
        debugger
        let y = await addCategory(obj)
        debugger
        if (y.data) {
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
        navigate('categories')
    }
    return <div>
        <input type={'button'} onClick={() => f1()} value="שמור" />
        <div className="container mt-5 d-flex justify-content-center">
            <br></br>
            <div className="card" style={{ width: '400px', borderColor: '#007bf', borderWidth: '2px', borderStyle: 'solid' }}>
                <div className="card-body">
                    <h5 className="card-title">הוסף קטגוריה</h5>
                    <div className="mb-3">
                        <input type={'text'} className="form-control" onBlur={(e) => setobj({ ...obj, categoryName: e.target.value })} placeholder={'name'}></input>
                    </div>
                    <div className="mb-3">
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <input type={'button'} className="btn btn-outline-primary" onClick={() => f1()} value="שמור"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

