import React, { useState, useEffect } from "react";
import { fetchDataHelper } from "../utils/fetchDataHelper";
import { Link } from "react-router-dom";
import "./TeamDetails.scss";

function TeamDetails(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const teamID = props.match.params.teamID;
  const teamLocation = `${props.location.state.venue} / ${props.location.state.location}`;
  let [singleSeasonData, regularSeasonData] = [null, null];
  let [singleSeasonStats, regularSeasonStats] = [null, null];

  const filterData = () => {
    singleSeasonData = data.stats[0];
    regularSeasonData = data.stats[1];
    singleSeasonStats = singleSeasonData.splits[0].stat;
    regularSeasonStats = regularSeasonData.splits[0].stat;
  };

  useEffect(() => {
    fetchDataHelper(
      `https://statsapi.web.nhl.com/api/v1/teams/${teamID}/stats`,
      setData,
      setLoading
    );
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <h1 className="app-loading">Loading...</h1>
      ) : (
        <div className="team-details">
          <Link to="/" className="details__back">
            {"< "}Back
          </Link>
          {filterData()}
          <h2 className="details__title">
            {singleSeasonData.splits[0].team.name}
          </h2>
          <p className="details__location">{teamLocation}</p>
          <div className="details__stats">
            <div className="stats__left">
              {Object.keys(singleSeasonStats).map((res, index) => {
                return (
                  <p
                    className="stats__single-stat"
                    key={index}
                  >{`${res}: ${singleSeasonStats[res]}`}</p>
                );
              })}
            </div>
            <div className="stats__right">
              {Object.keys(regularSeasonStats).map((res, index) => {
                return (
                  <p
                    className="stats__single-stat"
                    key={index}
                  >{`${res}: ${regularSeasonStats[res]}`}</p>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default TeamDetails;
