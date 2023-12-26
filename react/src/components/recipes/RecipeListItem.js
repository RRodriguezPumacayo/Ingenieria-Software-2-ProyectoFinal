<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
=======
>>>>>>> 90ddf0b2a9f94f0bdc3aed8289299dc14c07ede3
import { Link } from 'react-router';
import PropTypes from "prop-types";

<<<<<<< HEAD
const RecipeListItem = ({ id, name, remove }) => {
    const cssClass = `recipe-item-${id}`;
    const viewPath = `/recipe/${id}`;
    const editPath = `/edit/${id}`;
=======
export default class RecipeListItem extends React.Component {
    render() {
>>>>>>> 90ddf0b2a9f94f0bdc3aed8289299dc14c07ede3

    return (
        <div className={cssClass}>
            <h4>{name}</h4>
            <Link to={viewPath} className="fa-icon-eye-open"> View</Link> |
            <Link to={editPath} className="fa-icon-pencil"> Edit</Link> |
            <button onClick={remove} className="delete fa-icon-remove"> Delete</button>
        </div>
    );
}

<<<<<<< HEAD
RecipeListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
};

export default RecipeListItem;
=======
        return (
            <div className={cssClass}>
                <h4>{this.props.name}</h4>
                <Link to={viewPath} className="fa-icon-eye-open"> View</Link>&nbsp;|&nbsp;		
                <Link to={editPath} className="fa-icon-pencil"> Edit</Link>&nbsp;|&nbsp;
                <button onClick={this.props.remove} className="delete fa-icon-remove"> Delete</button>
            </div>
        );
    }
}

RecipeListItem.propTypes = {
    id : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    remove : PropTypes.string.isRequired,
};
>>>>>>> 90ddf0b2a9f94f0bdc3aed8289299dc14c07ede3
