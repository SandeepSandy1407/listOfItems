// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

let initialList = null

const DestinationSearch = props => {
  const {destinationsList} = props
  initialList = destinationsList
}

class DestinationSearchClass extends Component {
  state = {
    searchInput: '',
  }

  searchStarted = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    console.log(initialList)
    const temList = initialList.filter(eachItem =>
      eachItem.name.includes(searchInput),
    )

    return (
      <div>
        <h1>Destination Search</h1>
        <input
          type="search"
          value="searchInput"
          onChange={this.searchStarted}
        />
        <ul>
          {temList.map(eachItem => (
            <DestinationItem
              id={eachItem.id}
              name={eachItem.name}
              imgUrl={eachItem.imgUrl}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
