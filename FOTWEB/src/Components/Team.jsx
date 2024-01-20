import React from "react";
import dummyTeams from "../assets/dummyTeams.json";
import { useParams } from "react-router-dom";

// import Players from "./Players";

const Team = () => {
  const teams = dummyTeams.response;
  const { name } = useParams();

  const filteredTeams = teams.filter((team) => team.team.name === name);

  // Return null if no team is found
  if (filteredTeams.length === 0) {
    return null;
  }

  const team = filteredTeams[0]; // Use the first team in the filtered array

  if (team.venue.image === null) {
    return null;
  }
  return (
    <div className="flex flex-col  md:flex md:flex-row md:justify-around mx-auto  gap-14">
      <div className="bg-white shadow-md p-6 rounded-md h-[150vh]">
        <div className="flex items-center justify-center mb-4">
          <img
            src={team.team.logo}
            alt={team.team.name}
            width={50}
            className="mr-4"
          />
          <h1 className="text-3xl font-bold">{team.team.name}</h1>
        </div>

        <p className="text-gray-600 mb-4">
          {team.team.country} | Founded: {team.team.founded}
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Team Details</h2>
            <p>Code: {team.team.code}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Venue Details</h2>
            <p>Capacity: {team.venue.capacity}</p>
            <p>Address: {team.venue.address}</p>
          </div>
        </div>

        <div className="mt-6">
          <img
            src={team.venue.image}
            alt="Venue"
            className="w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
