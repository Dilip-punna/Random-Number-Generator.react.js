// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandom = () => Math.ceil(Math.random() * 100)

  onButton = () => {
    const randomNum = this.getRandom()
    this.setState({count: randomNum})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" className="button" onClick={this.onButton}>
            Generate
          </button>
          <h1>
            <span>{count}</span>
          </h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
