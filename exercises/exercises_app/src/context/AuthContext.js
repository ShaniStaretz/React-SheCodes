import React, { createContext, Component } from "react";
export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state={
        isAuthenticated:false
    }

    toggleAuth=()=>this.setState({isAuthenticated:!this.state.isAuthenticated})
    // value=the data or functions we want to share

    render(){
        return(
            <AuthContext.Provider value={{...this.state, toggleAuth:this.toggleAuth}}> 
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}
export default AuthContextProvider;