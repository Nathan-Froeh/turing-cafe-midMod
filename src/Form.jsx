import React, { Component } from 'react';


class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleAdd = (e) => {
    e.preventDefault()
    console.log('click')
    const {name, date, time, number} = this.state
    this.props.addRes(name, date, time, number)
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
    return (
    <form onSubmit={this.handleAdd}>
      <input 
      type="text" 
      name="name" 
      id="" 
      placeholder="Name" 
      onChange={this.handleChange}
      />
      <input 
      type="text" 
      name="date" 
      id="" 
      placeholder="Date"
      onChange={this.handleChange}
      />
      <input 
      type="text" 
      name="time" 
      id="" 
      placeholder="Time"
      onChange={this.handleChange}
      />
      <input 
      type="text" 
      name="number" 
      id="" 
      placeholder="Number of Guests"
      onChange={this.handleChange}
      />
      <input type="submit" value='Submit'/>
    </form>
  )
  }
}


export default Form;


// {name: <String>, date: <String>, time: <String>, number: <Number>}