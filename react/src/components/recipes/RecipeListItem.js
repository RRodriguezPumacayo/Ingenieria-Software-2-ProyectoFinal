import { Link } from 'react-router';
import PropTypes from "prop-types";

export default class RecipeListItem extends React.Component {
    render() {

        let cssClass = `recipe-item-${this.props.id}`;
        let viewPath = `/recipe/${this.props.id}`;
        let editPath = `/edit/${this.props.id}`;

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