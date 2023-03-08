import React from 'react';
import {useParams} from "react-router-dom"

function BlogPost(){
    
    const {match}=useParams();
    console.log(match)
    return(
        <div>
            <h1>Users:{match.path} </h1>
        </div>
    )
}

export default BlogPost;