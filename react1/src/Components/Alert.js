// import library
import React, {Component} from 'react';

// class alert
class Alert extends Component {
    render(){
        return(
            <div className={"alert alert-" + this.props.type }>
                <h4>{this.props.header}</h4>
                Ini adalah alert tipe {this.props.children}
            </div>
        );
    }
}

export default Alert;