import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  async populateWeatherData(e) {
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
      if (data !== null)
        document.location = "/fetch-data";
  }

  render() {
    return (
        <div className="text-center">
            <form className="form-signin" onSubmit={(e) => {
                e.preventDefault();
                this.populateWeatherData(e);
            }}>
                
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />

                <div className="checkbox mb-3">
                  <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                  <p className="mt-5 mb-3 text-muted">Tu Tong's Demo &copy; 2021</p>
                </div>
            </form>
        </div>
    );
  }
}
