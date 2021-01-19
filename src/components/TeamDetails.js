import React, { useState, useEffect } from "react";
import { fetchDataHelper } from "../utils/fetchDataHelper";

function TeamDetails(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const teamID = props.match.params.teamID;

  useEffect(() => {
    fetchDataHelper(
      `https://statsapi.web.nhl.com/api/v1/teams/${teamID}/stats`,
      setData,
      setLoading
    );
  }, []);

  return (
    <div className="team-details">
      <h1>Team details</h1>
    </div>
  );
}

export default TeamDetails;
