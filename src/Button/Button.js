import React, { Component } from 'react';

import './Button.css';

class Button extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            hasMaterial: false,
            deltaX: 0,
            deltaY: 0
        }
    }

    activeMaterial(event) {

        let { clientX, clientY } = event;
        let { offsetTop, offsetLeft } = this.myRef.current;

        let deltaX = clientX - offsetLeft;
        let deltaY = clientY - offsetTop;
        this.setState({
            hasMaterial: true,
            deltaX: deltaX - 5,
            deltaY: deltaY - 5,
        });
    }

    revmoeMaterial() {
        this.setState({
            ...this.state,
            hasMaterial: false
        });
    }

    render() {
        let { value } = this.props;
        let { hasMaterial, deltaX, deltaY} = this.state;
        return(
            <button ref={this.myRef} className="material-button" onClick={this.activeMaterial.bind(this)} onAnimationEnd={this.revmoeMaterial.bind(this)}>
                <span className="value">{value}</span>
                {
                    hasMaterial && <span className="material" style={{left: `${deltaX}px`, top: `${deltaY}px`}}></span>
                }
            </button>
        );
    }
}

export default Button;