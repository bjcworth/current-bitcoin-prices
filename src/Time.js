import React from 'react';
import './Prices.css'

class Time extends React.Component {
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
        var date = new Date(this.props.time);
        return (
            <React.Fragment>
                <h4> * Last updated: {date.toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</h4>
            </React.Fragment>
        );
      }
  }
  
  export default Time;
  