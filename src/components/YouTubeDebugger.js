import React from 'react'

class YoutubeDebugger extends React.Component {
  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }
  
  render() {
    return (
      <button>Bitrate</button>
      
      )
  }
}

export default YoutubeDebugger
