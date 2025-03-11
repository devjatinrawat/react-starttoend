
import React , { useState } from "react";



const Counter = () => {

    const [count , setCount] = useState(0);

    return(
        <>
            <div className="Wrapper">
                <button className="bg-red-400 rounded-3xl p-3" onClick={() => {
                    setCount(count + 1);
                }}
                value={console.log(setCount)}
                >Increment : {count}</button>
                <button className="bg-blue-400 rounded-3xl p-3" >Decrement</button>
                <button className="bg-blue-400 rounded-3xl p-3" onClick={() => {
                    setCount(0);
                }}>Reset</button>
                <button>extra button</button>
            </div>
        </>
    )
}


export default Counter;