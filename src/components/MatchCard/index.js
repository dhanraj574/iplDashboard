import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {competing_team_logo, competing_team, result, match_status, isWin} =
    recentMatchDetails
  return (
    <li className="matchcard-section">
      <img
        className="matchcard-img"
        src={competing_team_logo}
        alt={`latest match ${competing_team}`}
      />
      <p className="matchcard-teamname">{competing_team}</p>
      <p className="matchcard-result">{result}</p>
      {isWin ? (
        <p className="matchcard-matchstatus">{match_status}</p>
      ) : (
        <p className="matchcard-matchstatus1">{match_status}</p>
      )}
    </li>
  )
}
export default MatchCard
