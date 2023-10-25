import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'
import Card from '../Card'

class Home extends Component {
  state = {list: [], isLoading: true}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    console.log(data.packages)
    this.setState({list: data.packages, isLoading: false})
  }

  render() {
    const {list, isLoading} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Travel Guide</h1>
        {!isLoading ? (
          <ul>
            {list.map(each => (
              <Card item={each} key={each.id} />
            ))}
          </ul>
        ) : (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        )}
      </div>
    )
  }
}

export default Home
