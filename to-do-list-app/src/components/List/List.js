import Item from '../Item'
import { React, Component } from 'react';
import "./List.css"
export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        }
        this.changeStatus = this.changeStatus.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    changeStatus(itemId) {
        this.state.items[itemId].done = !this.state.items[itemId].done;
        this.setState(this.state.items)
    }

    removeItem(itemId) {
        this.state.items.splice(itemId,1)
        this.setState(this.state.items)
    }

    getItems() {
        let itemsList = [];
        this.state.items.forEach((item, index) => { itemsList.push(<Item details={item} key={index} index={index} onChangeStatus={this.changeStatus} onClickClose={this.removeItem}/>) })
        return itemsList
    }

    render() {

        return (
            <div className="fixed">
                <ul className="list-group"> {this.getItems()} </ul>
            </div>
        );
    }
}