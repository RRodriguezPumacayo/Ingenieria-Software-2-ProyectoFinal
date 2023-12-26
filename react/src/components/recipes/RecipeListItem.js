import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const RecipeListItem = ({ id, name, remove }) => {
    const cssClass = `recipe-item-${id}`;
    const viewPath = `/recipe/${id}`;
    const editPath = `/edit/${id}`;

    return (
        <div className={cssClass}>
            <h4>{name}</h4>
            <Link to={viewPath} className="fa-icon-eye-open"> View</Link> |
            <Link to={editPath} className="fa-icon-pencil"> Edit</Link> |
            <button onClick={remove} className="delete fa-icon-remove"> Delete</button>
        </div>
    );
}

RecipeListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
};

export default RecipeListItem;
