
import React from 'react';

import './login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    async populateWeatherData(e) {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }

    render() {
        return (
            <div className="text-center">
                <form className="form-signin" onSubmit={(e) => {
                    this.populateWeatherData(e);
                }}>
                    
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                        <label for="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                            <div className="checkbox mb-3">
                                
      
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                        </div>
                </form>
            </div>
        );
    }

}

export default Login;