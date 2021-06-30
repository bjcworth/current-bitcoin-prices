import logo from './Bitcoin.svg';
import './App.css';
import React from 'react';
import { CssBaseline } from '@material-ui/core';
import AccountBalance from '@material-ui/icons/AccountBalance';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {}
    };
  }

  loadPrices() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        }
      );
  }

  componentDidMount() {
    this.loadPrices();
    window.setInterval(
      () => this.loadPrices(),
      this.props.pollInterval,
    );
  }
  render() {
    if (this.state.isLoaded === false) {
      return <div>Loading...</div>
    }
    else if (this.state.isLoaded === true) {
      var date = new Date(this.state.data.lastUpdated);
      return (
        <React.Fragment>

          <CssBaseline /> {
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
              <div className="container" >
                <h1> Current Bitcoin Prices <AccountBalance fontSize='large'/></h1>
                <h2>  &#36; {this.state.data.usd}  <br />
                  &pound; {this.state.data.gbp}  <br />
                  &euro; {this.state.data.eur}
                </h2>

                <h4> * Last updated: {date.toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  <div className="ring-container">
                    <div className="ringring"></div>
                    <div className="circle"></div>
                  </div>

                </h4>

                {<div className="footer">
                  <h6> * {this.state.data.disclaimer}</h6>
                </div>}
              </div>
            </div>
          }

        </React.Fragment>

      );
    }

  }
}

export default App;
