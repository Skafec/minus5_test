import { Link } from "react-router-dom";
import "./SingleTeam.scss";

function SingleTeam(props) {
  const singleTeamData = props.singleTeamData;

  return (
    <Link
      to={{
        pathname: `/team/${singleTeamData.id}`,
        state: {
          location: singleTeamData.venue.city,
          venue: singleTeamData.venue.name,
        },
      }}
    >
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
