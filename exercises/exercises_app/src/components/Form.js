import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
 class Form extends Component {
    static contextType = ThemeContext;
    
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
    }

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value })
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        this.setState({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: ""
        });

        this.props.onChange({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: ""
        });

    }

    render() {
        const {isLightTheme,dark,light}=this.context;
        const theme=isLightTheme?light:dark;
        return (
            <form style={{background:theme.bg,color:theme.textColor}}>
                <input name="firstName"
                    type="text"
                    value={this.state.firstName}
                    placeholder="enter your first name"
                    onChange={e => this.change(e)} />
                <br />
                <input
                    type="text" name="lastName"
                    value={this.state.lastName}
                    placeholder="enter your last Name"
                    onChange={e => this.change(e)} />
                <button onClick={event => this.onSubmit(event)}>Submit</button>
            </form>
        )
    }

}

export default Form;
