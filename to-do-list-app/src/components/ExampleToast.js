import React from 'react';


import { Toast, Button } from 'react-bootstrap'
import '../App.css';
class ExampleToast extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true

        }

    }
    toggleShow(isShow) {
        this.setState({ show: isShow })
    }

    render() {
        return (
            <>
                {!this.state.show && <Button onClick={() => this.toggleShow(true)}>Show Toast</Button>}
                <Toast show={this.state.show} onClose={() => this.toggleShow(false)}>
                    <Toast.Header>
                        <strong className="mr-auto">React-Bootstrap</strong>
                    </Toast.Header>
                    <Toast.Body>{this.props.children}</Toast.Body>
                </Toast>
            </>
        );
    }


}

export default ExampleToast;

