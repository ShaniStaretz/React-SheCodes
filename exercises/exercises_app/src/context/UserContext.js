import React, { createContext,useState } from "react";

export const UserContext=createContext();

const UserContextProvider =(props)=>{
    const [users,setUsers]=useState([{displayName:"shani Staretz", id:1},
    {displayName:"David B", id:2},
    {displayName:"Moshe N", id:3}])
    return (
        <UserContext.Provider value={{users}}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider