import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    latestMatches: [],
    recentMatchesList: [],
    teamBannerUrl: '',
  }

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const newId = id.slice(1)

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const {team_banner_url, recent_matches, latest_match_details} = data
    const updatedRecentMatchesData = recent_matches.map(each => ({
      id: each.id,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    const updatedLatestMatchDetailsData = {
      id: latest_match_details.id,
      competingTeam: latest_match_details.competing_team,
      competingTeamLogo: latest_match_details.competing_team_logo,
      date: latest_match_details.date,
      firstInnings: latest_match_details.first_innings,
      manOfTheMatch: latest_match_details.man_of_the_match,
      matchStatus: latest_match_details.match_status,
      result: latest_match_details.result,
      secondInnings: latest_match_details.second_innings,
      umpires: latest_match_details.umpires,
      venue: latest_match_details.venue,
    }

    this.setState({
      teamBannerUrl: team_banner_url,
      latestMatches: updatedLatestMatchDetailsData,
      recentMatchesList: recent_matches,
      isLoading: false,
    })
  }

  renderTeamMatch = () => {
    const {teamBannerUrl, latestMatches, recentMatchesList, isLoading} =
      this.state
    return (
      <div className="team-matches">
        <div className="teambanner">
          <img
            className="teambanner-img"
            src={teamBannerUrl}
            alt="team banner"
          />
        </div>
        <div className="latest-matches">
          <h1 className="latestmatches-heading">Latest Matches</h1>
          <LatestMatch key={latestMatches.id} latestMatch={latestMatches} />
          <ul className="recentmatch-list">
            {recentMatchesList.map(each => (
              <MatchCard
                key={each.id}
                recentMatchDetails={each}
                isWin={each.matchStatus === 'Won'}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {teamBannerUrl, latestMatches, recentMatchesList, isLoading} =
      this.state

    return (
      <div className="team-matches">
        {isLoading ? (
          <div className="loader" textid="loader">
            <Loader type="TailSpin" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatch()
        )}
         <Link to="/" className="back-link">
          <button type="button" className="back-btn">
            Back
          </button>
        </Link>
      </div>
    )
  }
}

export default TeamMatches
