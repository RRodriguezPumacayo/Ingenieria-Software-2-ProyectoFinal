import config from 'Config';
import PropTypes from "prop-types";
global.Config = config;

export default class App extends React.Component {
    render() {
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.string.isRequired,
};