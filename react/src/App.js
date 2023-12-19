import PropTypes from 'prop-types';
import config from 'Config';
global.Config = config;

class App extends React.Component {
    render() {
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}
App.propTypes = {
    children: PropTypes.node,
};

export default App;