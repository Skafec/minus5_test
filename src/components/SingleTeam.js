import { Link } from "react-router-dom";
import "./SingleTeam.scss";

function SingleTeam(props) {
  const singleTeamData = props.singleTeamData;
  console.log(singleTeamData);

  return (
    <Link to={`/team/${singleTeamData.id}`}>
      <div className="single-team">
        <h2 className="item__title">{singleTeamData.name}</h2>
        <p className="item__location">
          {singleTeamData.venue.name} / {singleTeamData.venue.city}
        </p>
      </div>
    </Link>
  );
}

export default SingleTeam;
