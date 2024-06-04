import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImgUrl} = teamDetails
  return (
    <Link className="teamcard-link" to={`/team-matches/${id}`}>
      <li className="teamcard-item">
        <img className="team-img" src={teamImgUrl} alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
