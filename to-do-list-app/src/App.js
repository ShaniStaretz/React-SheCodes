import React from 'react';
import './App.css';

import Header from './components/Header';
import List from './components/List/List';
import ToDoForm from './components/Form/ToDoForm';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:props.items
    }
    this.addItem = this.addItem.bind(this)
  }


  addItem(newItem) {    
    let { items } = this.state;
    items.push({ index: items.length, value: newItem });
    this.setState({ items })

  }

  render() {
    return (
      <div id="main">
        <Header />
        <ToDoForm onAddItem={this.addItem} />
        <List items={this.props.items} />
      </div>

    )
  }


}

export default ToDoApp;
