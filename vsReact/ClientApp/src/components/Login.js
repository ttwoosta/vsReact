
import React from 'react';

import './login.css';

class Login extends React.Component {

    

    async loginAsync(e) {
        const response = await fetch('weatherforecast',{
          method: 'POST',
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
          body: JSON.stringify({
            username: document.getElementById('inputEmail').value,
            password: document.getElementById('inputPassword').value
          }),
        });
          
        const data = await response.json();
        if (response.ok) {
            if (data !== null)
                document.location = "/";
        }
        else {
            alert("Login failed");
        }
          
      }

    render() {
        return (
            <div className="text-center">
                <form className="form-signin" onSubmit={(e) => {
                    this.loginAsync(e);
                }}>
                    
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                            <div className="checkbox mb-3">
                                
      
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            <p className="mt-5 mb-3 text-muted">Tu Tong &copy; 2017-2018</p>
                        </div>
                </form>
            </div>
        );
    }

}

export default Login;