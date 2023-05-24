import './App.css';
import React, { Component } from 'react';
// import Hooks from './hooks'
// import School from './School';
import NewBookForm from './components/BookForm';
import Form from './components/Form';
import NavBar from './components/NavBar';
import UsersList from './components/UsersList';
import BookList from './components/BookList';
// import Http from './Http1';
import Route1 from './route1';
import NavBarHook from './hooksPages/NavBar-Hook';
import ThemeToggleHook from './hooksPages/ThemeToggle-Hook';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';
import UserContextProvider from './context/UserContext';
import BookContextProvider from './context/BookContext';
//import ThemeToggle from './components/ThemeToggle';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';


// const studentsGrades = [
//   { name: "Naama", grade: "90", id: 0 },
//   { name: "David", grade: "80", id: 1 },
//   { name: "Lior", grade: "95", id: 2 },
//   { name: "Yaniv", grade: "100", id: 3 }
// ]

function App() {
	const counter = useSelector((state) => state.counter);
	const islogged = useSelector((state) => state.islogged);
	const dispatch= useDispatch()
	return (
		<div className="App">
			<h1>Counter {counter}</h1>
			<button onClick={()=>dispatch(increment(5))}>+</button>
			<button onClick={()=>dispatch(decrement())}>-</button>
			{islogged ? <h3> valuable inforation i souldn't see</h3> : ''}
			
		</div>
	);
}
// class App extends Component {
// 	// constructor(props){
// 	//   super(props);

// 	// }
// 	// state = {
// 	//   name: "shani"
// 	// }
// 	// changeName = (newName) => {
// 	//   this.setState({ name: newName })
// 	// }

// 	// changeNameFromInput = (event) => {
// 	//   this.setState({ name: event.target.value })
// 	// }

// 	// onChange = updatedValue => {
// 	//   this.setState({
// 	//     fields: {
// 	//       ...this.state.fields,//keep the existing values
// 	//       ...updatedValue// adding new value
// 	//     }
// 	//   });
// 	// };
// 	render() {
// 		return (
// 			<div className="App">

// 				<ThemeContextProvider>
// 					<AuthContextProvider>
// 						{/* <NavBar /> */}
// 						<NavBarHook />
// 						{/* <Form /> */}
// 						{/* <UserContextProvider>
// 							<UsersList />
// 						</UserContextProvider> */}
// 						<BookContextProvider>
// 							<NewBookForm/>
// 							<BookList />

// 						</BookContextProvider>
// 						<ThemeToggleHook />
// 						{/* <ThemeToggle /> */}
// 					</AuthContextProvider>
// 				</ThemeContextProvider>
// 			</div>
// 		);
// 	}
// }

export default App;
