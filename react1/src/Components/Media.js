// import library
import React, {Component} from 'react';

// Class Media
class Media extends Component {
    render(){
        return(
            <div className="media my-3">
                {/* process.env.PUBLIC_URL // mendefinisikan path folder public */}
                <img src={process.env.PUBLIC_URL + "/image/" + this.props.image}
                    className="mr-3" alt="media" width={this.props.width}/>
                <div className="media-body text-left">
                    <h5 className="mt-0">
                        {this.props.title}
                    </h5>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Media;