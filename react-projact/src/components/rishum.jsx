import { useState } from "react"
import { addCustomer } from "../axios/customerAxios"

export const Rishum = () => {

    const f1 = async () => {
        debugger
        let y = await addCustomer(d)
        if(y)
            alert("נרשמת בהצלחה!!")
        if (!y) {
            alert("נכשלת")
        }
    }

    const [d, setd] = useState({
        "custCode": 0,
        "custName": "string",
        "pass": "string",
        "creditInformation": "string"
    })

    return <div>
        <div className="container mt-5 d-flex justify-content-center">
            <br></br>
            <div className="card" style={{ width: '400px', borderColor: '#007bf', borderWidth: '2px', borderStyle: 'solid' }}>{/*#ffa500*/}
                <div className="card-body">
                    <h5 className="card-title">הרשם</h5>
                    <div className="mb-3">
                        <input type={'text'} className="form-control" onBlur={(e) => setd({ ...d, custName: e.target.value })} placeholder={'name'}></input>
                    </div>
                    <div className="mb-3">
                        <input type={'password'} className="form-control" onBlur={(e) => setd({ ...d, pass: e.target.value })} placeholder={'password'}></input>
                    </div>
                    <div className="mb-3">
                        <input type={'text'} className="form-control" onBlur={(e) => setd({ ...d, creditInformation: e.target.value })} placeholder={'creditCerd'}></input>
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