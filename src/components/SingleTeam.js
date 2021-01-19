import { Link } from "react-router-dom";

function SingleTeam(props) {
  const singleTeamData = props.singleTeamData;

  return (
    <Link to={`/team/${singleTeamData.id}`}>
      <div className="single-team">
        <h2>Single team item</h2>
      </div>
    </Link>
  );
}

export default SingleTeam;
