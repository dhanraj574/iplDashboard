import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    id,
    competingTeam,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
    competingTeamLogo,
  } = latestMatch
  return (
    <div className="latestmatch-section">
      <div className="latestmatch-details">
        <div className="latestmatch">
          <div className="latestmatch-team">
            <p className="latestmatchteam-name">{competingTeam}</p>
            <p className="latestmatch-matchdate">{date}</p>
          </div>
          <div className="latestmatchvenue-details">
            <p className="latestMatch-venue">{venue}</p>
            <p className="latestMatch-result">{result}</p>
          </div>
        </div>
        <div className="latestmatchteam-logo">
          <img
            className="latestmatch-logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
      </div>
      <div className="latestmatch-heighlights-cont">
        <div className="latestmatch-heighlights">
          <p className="heighlights-heading">First Innings</p>
          <p className="heighlights-content">{firstInnings}</p>
        </div>
        <div className="latestmatch-heighlights">
          <p className="heighlights-heading">Second Innings</p>
          <p className="heighlights-content">{secondInnings}</p>
        </div>
        <div className="latestmatch-heighlights">
          <p className="heighlights-heading">Man Of The Match</p>
          <p className="heighlights-content">{manOfTheMatch}</p>
        </div>
        <div className="latestmatch-heighlights">
          <p className="heighlights-heading">umpires</p>
          <p className="heighlights-content">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
