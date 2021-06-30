import React from 'react';
import './Disclaimer.css'

class Disclaimer extends React.Component {
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
                 <footer>
                  <h6> * {this.props.message}</h6>
                </footer>
            </React.Fragment>
        );
      }
  
  }
  
  export default Disclaimer;
  