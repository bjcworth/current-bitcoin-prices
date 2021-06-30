import React from 'react';
import './Prices.css'

class Prices extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false
      };
    }
  
    componentDidMount() {
        this.setState({
            isLoaded: true
        });
    }
    render() {
        return (
            <React.Fragment>
                <h2>  &#36; {this.props.prices.usd}  </h2>
                <h2>  &pound; {this.props.prices.gbp} </h2>  
                <h2> &euro; {this.props.prices.eur} </h2>
            </React.Fragment>
        );
      }
  
  }
  
  export default Prices;
  