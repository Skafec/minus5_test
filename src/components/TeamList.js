import React, { useState, useEffect } from "react";
import SingleTeam from "./SingleTeam";
import { fetchDataHelper } from "../utils/fetchDataHelper";
import "./TeamList.scss";

function TeamList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataHelper(
      "https://statsapi.web.nhl.com/api/v1/teams",
      setData,
      setLoading
    );
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <h1 className="app-loading">Loading...</h1>
      ) : (
        <div className="team-list">
          <h1 className="list__title">NHL teams</h1>
          {data.teams.map((team, index) => {
            return <SingleTeam key={index} singleTeamData={team} />;
          })}
        </div>
      )}
    </React.Fragment>
  );
}

export default TeamList;
