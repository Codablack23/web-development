import { useState } from "react"

export default function State(){
    const [count,setCount] = useState(0)
    const [name,setName] = useState("John")

    const handleClick = () => {
        setCount(count + 1)
        setName("peace")
    }
    const decrease = () => {
        setCount(count - 1)
        setName("John")
    }

    return (
        <div>
            <p>Count {count}</p>
            <p>name {name}</p>
            <button onClick={handleClick}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}