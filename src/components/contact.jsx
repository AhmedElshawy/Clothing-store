import React, { Component } from 'react';


class Contact extends Component {
   
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
            <div className="contact">
            <h1>Contact us</h1>
            <p>Questions? Go ahead.</p>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='E-mail'/>
            <input type="text" placeholder='Subject'/>
            <input type="text" placeholder='Message'/>
            </div>
        </React.Fragment>
         );
    }
}
 
export default Contact;