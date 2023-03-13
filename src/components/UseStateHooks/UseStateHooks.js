import React, { useState } from 'react'


const UseStateHooks = () => {
    let number = 1;
    const [num, setNum] = useState(number);

    function inc(){
        setNum(num+1);
    }

    function dec(){
        setNum(num -1);
    }

    return (
        <div className='UseStateHooks'>
            <h1 className="heading">{num}</h1>
            <div className="buttonSection">
                <button className="btn" onClick={inc}>Increment</button>
                <button className="btn" onClick={dec}>Decrement</button>
            </div>
        </div>

    )
}

export default UseStateHooks