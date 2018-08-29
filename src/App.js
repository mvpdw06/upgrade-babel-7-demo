import React, { Component } from 'react'
import Enhancer from './Enhancer'
import throttle from 'lodash/throttle'

@Enhancer
class App extends Component {
  constructor(props) {
    super(props)
    this.throttledPushButton = throttle(this.pushButton, 1000)
  }
  pushButton = () => {
    console.log('I am pushed.')
  }
  render() {
    return (
      <>
        Hey You!
        <button onClick={this.throttledPushButton}>Push me!!!!</button>
      </>
    )
  }
}

export default App
