import React from 'react';
import {useLocation,useHistory} from "react-router-dom"

function About(){
    const location= useLocation();
    const history= useHistory();

    function goBackHandler(){
        history.goBack()
    }
    return(
        <div>
            <h1>About</h1>
            <h1>to:{location.pathname}</h1>
            <h1>From:{location.state.from}</h1>
            <button onClick={goBackHandler}>Go Back</button>
        </div>
    )
}

export default About;