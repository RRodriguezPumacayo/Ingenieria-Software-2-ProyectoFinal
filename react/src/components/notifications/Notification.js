import $ from 'jquery';
import Events from 'utilities/Events';

export default class Notification extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            text: '',
            cssClass: ''
        };

        Events.on('notification', (message, type) => {
            this.setState({
                text: message,
                cssClass: this.getClass(type)
            });

            this.show();
        });
    }

    getClass(type){
        switch(type){
            case 'success':
                return 'accepted notification';
            case 'error':
                return 'cancel notification'
            case 'warning':
                return 'warning notification';
            case 'information':
                return 'information notification';
        }        
    }

    componentDidMount(){
            const node = ReactDOM.findDOMNode(this.refs.display);
        $(node).hide();
    }

    show(){
        let node = ReactDOM.findDOMNode(this.refs.display);
        $(node).show();
        setTimeout(() =>{
            this.fadeout();
        }, 5000);

    }

    fadeout() {
        let node = ReactDOM.findDOMNode(this.refs.display);
        $(node).fadeOut();
    }

    render(){

        return(
            <div ref="display" onClick={() => this.fadeout()} className={this.state.cssClass}>{this.state.text}</div>
        )
    }

}