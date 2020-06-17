import React, { Component } from 'react';
import Clock from './Clock';
// import component feature in react
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

// ES6 CLASS
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2020',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }


  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <div className="Clock-prefix">
          <div className="Clock-title">DD</div>
          <div className="Clock-title">HH</div>
          <div className="Clock-title">MM</div>
          <div className="Clock-title">SE</div>
        </div>
        <div>
          <Clock
            deadline={this.state.deadline}
          />
        </div>
        <Form inline>
           <FormControl
            className="Deadline-input"
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
           />
           <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
