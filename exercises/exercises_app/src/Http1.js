import { react, Component } from 'react';
import axios from 'axios'
const API_ENDPOINT='https://api.randomuser.me/'
export default class Http extends Component {
    constructor(props) {
        super(props);
        this.state=null
    }

    componentDidMount(){
        this.getData();
    }

   async getData(){
    try {
        let response=await axios.get(API_ENDPOINT);
        
        this.setState(response.data.results[0])
    } catch (error) {
    console.error("failed to get data from endpoint with error:",error.response.message);
        
    }    
    

    }

    render(){
        if(!this.state)return null;
        console.log(this.state);
        return (
            <div>
            <p>Name: {this.state.name.title} {this.state.name.first} {this.state.name.last}</p>
            <p>Gender: {this.state.gender}</p>
           <p>Age: {this.state.dob.age}</p>
           <p>Email: {this.state.email}</p>
           <img src={this.state.picture.thumbnail}/>
            </div>
        )
    }
}