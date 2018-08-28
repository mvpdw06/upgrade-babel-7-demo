import React, { Component } from 'react'
import Enhancer from './Enhancer'
import { throttle } from 'react-decoration'

@Enhancer
class App extends Component {
  @throttle(2000)
  pushButton() {
    console.log('I am pushed.')
  }
  render() {
    return (
    <>
      Hey You!
      <button onClick={this.pushButton}>Push me!!!!</button>
    </>
    )
  }
}

export default App
