import { useContext } from "react"
import { useParams } from "react-router-dom"
import MyContex from "../contex"

export const Pay = () => {
    
    const sal = useContext(MyContex).sal
    debugger
    let sum=useParams().sum

    return <div>
        
        <h1>הסכום לתשלום:{sum}</h1>
    </div>
}