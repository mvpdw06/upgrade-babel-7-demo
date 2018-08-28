import React from 'react'

const Enhancer = Wrapper => {
  class InternalComponent extends React.Component {
    wrapperFunction = () => {
      console.log('>>test')
    }
    render() {
      return <Wrapper wrapperFunction={this.wrapperFunction} />
    }
  }
  return InternalComponent
}

export default Enhancer
