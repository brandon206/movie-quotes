import React,{ Component } from 'react';
import auth from '../hoc/auth';

class Quotes extends Component {

    render () {
        
        return (
            <div>
                <h1 className = "center">Movie Quotes</h1>
                <h5>I'll be there for you</h5>
            </div>
        );
    }
}

export default auth(Quotes);