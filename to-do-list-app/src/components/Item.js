import { React, Component } from 'react';
import "./List/List.css"
export default class Item extends Component {
    changeStatus = this.changeStatus.bind(this);

    changeStatus(e) {
        this.props.onChangeStatus(e.target.name)
    }

    onClickClose = this.onClickClose.bind(this);

    onClickClose(e) {
        this.props.onClickClose(e.target.name)
    }

    render() {
        return (
            <div key={this.props.index} className="list-group-item">
                <input type="checkbox" key={this.props.index} name={this.props.index} checked={this.props.details.done} onChange={this.changeStatus} />
                <span className={this.props.details.done ? "done" : 'undone'}>{this.props.details.value}</span>
                <button type="button" class="btn-close" onClick={this.onClickClose}/>
            </div>
        )
    }
}