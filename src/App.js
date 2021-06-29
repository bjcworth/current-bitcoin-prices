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

  componentDidMount() {
    fetch(this.props.url)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          data: result
        });
      }
    )
  }
  render() {
    if(this.state.isLoaded===false) {
      return <div>Loading...</div>
    }
    else if (this.state.isLoaded===true) {
      console.log(this.state.data["bpi"]["USD"]["rate"])
      return (
              <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
                <div className="container" >
                    <h2> Lastest Bitcoin Price Index Data </h2>
                    <h3> USD  &#36; { this.state.data.bpi.USD.rate}  </h3>
                    <h3> GBP &pound; {this.state.data.bpi.GBP.rate}  </h3>
                    <h3> EUR &euro; {this.state.data.bpi.EUR.rate}  </h3>
                    <h5> Last updated: {this.state.data.time.updated} </h5>
                </div>
              </div>
                
            );
    }
      
  }
}

export default App;
