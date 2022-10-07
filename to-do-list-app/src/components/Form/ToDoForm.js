
import { React, Component } from 'react';
import "./ToDoForm.css"
export default class ToDoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.saveItem = this.saveItem.bind(this)
    }

    saveItem(e) {
        e.preventDefault()
        let t = this.state.title
        this.props.onAddItem(t);
        this.setState({ title: '' })
    }

    handleChange(e) {

        let { value } = e.target;
        this.setState({ title: value })
    }

    render() {
        console.log("item:", this.state.title);

        return (
            <div className="toDoForm">
                <form ref="form">
                    <input type="text" name="title" ref="itemTitle" value={this.state.title} placeholder='add new item' onChange={this.handleChange} />
                    <button type='submit' onClick={this.saveItem}> add item</button>
                </form>
            </div>
        );
    }
}