import React, { Component } from 'react'
import Enhancer from './Enhancer'

@Enhancer
class App extends Component {
  render() {
    return <div>Hey You!</div>
  }
}

export default App
