import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Form extends React.Component {
    render() {
        return (
            
          <form className="form">
              <div className="forms">
              <h1>FORM</h1>
              <h3>Please fill out this information about yourself.</h3>
            
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name"/>
            <br></br>
            <br></br>
           
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Phone number"/>
            <br></br>
            <br></br>

            <input type="text" placeholder="Address" />
            <input type="text" placeholder="ZIP code and location"/>
            <br></br>
            <br></br>

            <input type="date" placeholder="Date of Birth"/>
            <br></br>
            <br></br>
            </div>
            <button className="redbtn">Cancel</button>
            <button className="greenbtn">Submit</button>
          </form>  
        );
    }
}

ReactDOM.render(<Form />, document.getElementById('root'));


