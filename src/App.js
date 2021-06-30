import logo from './Bitcoin.svg';
import './App.css';
import React from 'react';
import { CssBaseline } from '@material-ui/core';
import AccountBalance from '@material-ui/icons/AccountBalance';
import Prices from './Prices.js'
import Time from './Time.js'
import Disclaimer from './Disclaimer.js'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {}
    };
  }

  loadData() {
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
    this.loadData();
    window.setInterval(
      () => this.loadData(),
      this.props.pollInterval,
    );
  }

  render() {
    if (this.state.isLoaded === false) {
      return (
        <React.Fragment>
          <CssBaseline /> {<div>Loading...</div>}
        </React.Fragment>
      );

    }
    else if (this.state.isLoaded === true) {
      return (
        <React.Fragment>
          <CssBaseline /> {
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
              <div className="container" >
                <h1> Current Bitcoin Prices <AccountBalance fontSize='large' /></h1>
                <Prices prices={this.state.data} />
                <Time time={this.state.data.lastUpdated} />
                <Disclaimer message={this.state.data.disclaimer} />
              </div>
            </div>
          }
        </React.Fragment>
      );
    }
  }
}

export default App;
