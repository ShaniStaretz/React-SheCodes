import React from 'react';
import{useRouteMatch,Link,Route
} from "react-router-dom";

import BlogPost from './BlogPost';
function Home(){
    let match=useRouteMatch({
        path:'/Blog/:name/',
        strict:true,
        sensitive:true
      })
    return(
        <div>
       
            <h1>Home</h1>
            <Link to="/Blog/shani/">Blog</Link>
           
            {match?<BlogPost match={match}/>:<h2>Not Found</h2>}
        
        </div>
    )
}

export default Home;