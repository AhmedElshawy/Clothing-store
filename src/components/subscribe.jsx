import React, { Component } from 'react';

class Subscribe extends Component {
    
    state = {}
    
    render() { 
        return ( 
        <React.Fragment>
            <div className='subscribe-section'>
                <h1>Subscribe</h1>
                <p>To get special offers and VIP treatment:</p>
                <input type="text" placeholder='Enter your E-mail' />
                <button>Subscribe</button>
            </div>

        </React.Fragment> 
        );
    }
}
 
export default Subscribe;