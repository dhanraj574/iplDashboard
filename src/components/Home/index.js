import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()

    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImgUrl: each.team_image_url,
    }))
    this.setState({teamList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, teamList} = this.state
    return (
      <div className="home-section">
        <div className="home-header">
          <img
            className="ipl-img"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="home-heading">IPL Dashboard</h1>
        </div>
        <div className="teams-section">
          <ul className="teams-list">
            {isLoading ? (
              <div testid="loader">
                <Loader
                  className="loader"
                  type="TailSpin"
                  color="#ffffff"
                  height={50}
                  width={50}
                />
              </div>
            ) : (
              teamList.map(each => (
                <TeamCard key={each.id} teamDetails={each} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
