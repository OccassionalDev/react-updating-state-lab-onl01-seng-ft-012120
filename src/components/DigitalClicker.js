import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }
  
  updateClickCount = () => {
        this.setState(previousState => {
      return {
        timesClicked: previousState.count + 1
      }
    })
  }
}

export default DigitalClicker