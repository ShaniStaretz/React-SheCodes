
import './App.css';
import React, { Component } from 'react';
import School from './School';
import Form from './Form';
import Http from './Http1';
import Route1 from './route1';

// const studentsGrades = [
//   { name: "Naama", grade: "90", id: 0 },
//   { name: "David", grade: "80", id: 1 },
//   { name: "Lior", grade: "95", id: 2 },
//   { name: "Yaniv", grade: "100", id: 3 }
// ]

// function App() {

//   return (
//     <div className="App">
//      <School list={studentsGrades}/>
//     </div>
//   );
// }
class App extends Component {
  // constructor(props){
  //   super(props);

  // }
  state = {
    name: "shani"
  }
  changeName=(newName)=>{
    this.setState({name:newName})
  }

  changeNameFromInput=(event)=>{
    this.setState({name:event.target.value})
  }

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,//keep the existing values
        ...updatedValue// adding new value
      }
    });
  };
  render() {
    return (
      <div className="App">
        {/* <br /> <br />
     
        <button onClick={this.changeName.bind(this,'Shani Staretz')}>change state</button>
        <br /><br />
        <input type="text" onChange={this.changeNameFromInput} value={this.state.name}/>
        <br /><br />
        <div>{this.state.name}</div> */}
        <Http/>
        <Route1/>
        {/* <div><Form onChange={fields=>this.onChange(fields)}/>
        <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p></div> */}
      </div>
    )
  }
}

export default App;
