import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Direction extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            mode: props.mode === 'edit' ? 'edit' : 'view'
        };
    }

    valueChanged = (event) => {
        const name = event.target.value;
        this.setState({
            name: name
        });

        this.props.change(name);
    }

    render() {
        const { mode, name } = this.state;
        const { remove } = this.props;

        if(mode === 'edit') {
            return (
                <div>
                    <p>
                        <textarea className="left" value={name} onChange={this.valueChanged}></textarea>
                        <button onClick={remove} className="deleteDirection fa-icon-remove pointer left"></button>
                    </p>
                    <div className="clear"></div>
                </div>
            );
        } else {
            return (
                <li>{name}</li>
            );
        }
    }
}

Direction.propTypes = {
    name: PropTypes.string.isRequired,
    mode: PropTypes.string,
    change: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

export default Direction;
