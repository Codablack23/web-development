/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const NameComponent = () => {
    const [name] = useState("john")

    // componentDidMount, *
    // componentDidUnmount *
    useEffect(()=>{
        console.log("component mounted")
    },[])
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}

const Invoice = ({price}) => {
    const [comission,setCommission] = useState(0)

    // componentDidUpdate
    useEffect(()=>{
        setCommission(price * 0.2)
    },[price])
    return (
        <h3>Comission: {comission}</h3>
    )
}
const Hooks = () => {
    const [shown,setShown] = useState(true)
    const [price,setPrice] = useState(0)

    const toggle = () => {
        setShown(!shown)
    }
    const handleChange = (e) => {
        setPrice(e.target.value)
    }
    return (
        <div>
            <button onClick={toggle}>Show Comp</button>
            {shown
            ?<NameComponent/>
            :null}
            <input type="number" placeholder="price" onChange={handleChange} />
            <Invoice price={price}/>
        </div>
    )
}

export default Hooks;