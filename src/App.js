import logo from './Bitcoin.svg';
import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
        data: {} };
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
    if(this.state.isLoaded===false) {
      return <div>Loading...</div>
    }
    else if (this.state.isLoaded===true) {
      var date = new Date(this.state.data.lastUpdated);
      return (
              <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
                <div className="container" >
                    <h1> Current Bitcoin Prices </h1>
                    <h2>  &#36; { this.state.data.usd}  <br />
                          &pound; {this.state.data.gbp}  <br />
                          &euro; {this.state.data.eur}  <br />
                    </h2>
                    <h4> * Last updated: {date.toLocaleString()} </h4>
                    { <div className="footer">
                    <h6> * {this.state.data.disclaimer}</h6> 
                    </div>}
                </div>
              </div>
                
            );
    }
      
  }
}

export default App;
