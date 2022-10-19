import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor'
function Hooks() {
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState('');
    
    useEffect(()=>{
        const intervalId=setInterval(()=>
        setCounter(prev=>prev+1),1000);
        return ()=>clearInterval(intervalId)//componentWillUnMount-return a cleanup function
    },[])//empty array=componentWillMount, will run 1 time

    useEffect(() => {//do something AFTER every render
        setColor(randomcolor())
        document.title = `You clicked ${counter} times`;
    },[counter]);// componentDidUpdate- tracking parameter's changes

    return (
        <div>
            <p style={{color:color}}> You clicked {counter} times</p>
            {/* <button onClick={() => setCounter(counter + 1)}>Click Me</button> */}
        </div>
    )
}

export default Hooks;