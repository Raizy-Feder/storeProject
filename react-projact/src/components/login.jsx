import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ifExist } from "../axios/customerAxios"
import MyContex from "../contex"

export const Login = () => {

    const setconcat = useContext(MyContex).setconcat
    const mynevigat = useNavigate()
    let y

    const f2 = async () => {
        debugger
        y = (await ifExist(d.name, d.pass)).data
        if (y) {
            alert("אתה רשום במערכת")
            setcurrentCustomer(d)
            setconcat(true)
            if (d.name === "מנהל" && d.pass === "1111")
                setcurrentCustomer(d)
        }
        else {
            alert(" אינך רשום במערכת,הנך מועבר לרישום!")
            mynevigat('/rishum')
        }
    }
    const setcurrentCustomer = useContext(MyContex).setcurrentCustomer
    const [d, setd] = useState({ name: "", pass: "" })

    return <div>
        <div className="container mt-5 d-flex justify-content-center">
            <br></br>
            <div className="card" style={{ width: '400px', borderColor: '#007bf', borderWidth: '2px', borderStyle: 'solid' }}>
                <div className="card-body">
                    <h5 className="card-title">התחבר</h5>
                    <div className="mb-3">
                        <input type={'text'} className="form-control" onBlur={(e) => setd({ ...d, name: e.target.value })} placeholder={'name'}></input>
                    </div>
                    <div className="mb-3">
                        <input type={'text'} className="form-control" onBlur={(e) => setd({ ...d, pass: e.target.value })} placeholder={'password'}></input>
                    </div>
                    <div className="mb-3">
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <input type={'button'} className="btn btn-outline-primary" onClick={() => f2()} value="שמור"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
