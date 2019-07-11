import React, { Component } from 'react';
import './App.css';
import CardComponents from './CardComponents';
import Call from './Fetch';
import Form from './Form';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      reservations: []
    }
    
  }


  componentDidMount() {
    Call.getReservations()
      .then((data) => this.setState({reservations: [...data]}))
  }


  addRes = (name, date, time, number) => {
    console.log('send')
    const id = Date.now()
    const res = {
      name: name,
      date: date,
      time: time,
      number: number,
      id: id
    }
    Call.postRes(res)
  }


  render() {
    const {reservations} = this.state
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addRes={this.addRes}/>
        <div className='resy-form'>

        </div>
        <CardComponents reservations={reservations}/>
          
      </div>
    )
  }
}

export default App;
