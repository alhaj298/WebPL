// import standingsData from "../assets/dummyStanding.json";
// import { Link } from "react-router-dom";

// const Standings = () => {
//   const leagues = standingsData.response;

//   return (
//     <>
//       {leagues.map((league) => (
//         <div
//           key={league.league.id}
//           className="bg-[#1d1d1d] rounded-lg shadow-md mb-4 border border-gray-300 overflow-hidden text-white"
//         >
//           <div className="flex items-center mb-4 p-4 bg-[#1d1d1d]">
//             <img
//               src={
//                 "https://b.fssta.com/uploads/application/soccer/competition-logos/EnglishPremierLeague.png"
//               }
//               alt={league.league.name}
//               width={80}
//               className="mr-4 rounded-full bg-contain"
//             />
//           </div>
//           <div className="">
//             <table className="w-full table-auto">
//               <thead>
//                 <tr className="bg-[#1d1d1d] border border-t-white ">
//                   <th className="py-2 border-b">Pos</th>
//                   <th className="border-b">Team</th>
//                   <th className="border-b">Pl</th>
//                   <th className="border-b">W</th>
//                   <th className="border-b">D</th>
//                   <th className="border-b">L</th>
//                   <th className="border-b">GF</th>
//                   <th className="border-b">GA</th>
//                   <th className="border-b">GD</th>
//                   <th className="border-b">Pts</th>
//                   <th className="border-b mr">Form</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {league.league.standings[0].map((team) => (
//                   <tr key={team.team.id}>
//                     <td className="py-2 px-4 border-b">{team.rank}</td>
//                     <td className="border-b">
//                       <Link
//                         to={`/team/${team.team.name}`}
//                         className="flex items-center"
//                       >
//                         <img
//                           src={team.team.logo}
//                           alt={team.team.name}
//                           width={24}
//                           className="mr-2"
//                         />
//                         <span className="text-sm">{team.team.name}</span>
//                       </Link>
//                     </td>
//                     <td className="border-b px-0">{team.all.played}</td>
//                     <td className="border-b px-0">{team.all.win}</td>
//                     <td className="border-b ">{team.all.draw}</td>
//                     <td className="border-b ">{team.all.lose}</td>
//                     <td className="border-b ">{team.all.goals.for}</td>
//                     <td className="border-b ">{team.all.goals.against}</td>
//                     <td className="border-b ">{team.goalsDiff}</td>
//                     <td className="border-b ">{team.points}</td>
//                     <td className="border-b">
//                       {team.form.split("").reverse()}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Standings;

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../API/api";
import Navbar from "./Navbar";
import { IoArrowBack } from "react-icons/io5";

const Standings = () => {
  const [standingsData, setStandingsData] = useState([]);
  const navigate = useNavigate();

  const handleTeamClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const cacheKey = "FullStandingCache";

    const fetchStandings = async () => {
      try {
        const endpoint = "v3/standings?season=2023&league=39";
        const data = await fetchData("GET", endpoint, cacheKey);
        setStandingsData(data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStandings();

    // Then set up an interval to fetch standings every 24 hours
    const intervalId = setInterval(fetchStandings, 24 * 60 * 60 * 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-1 bg-[black]">
        <button onClick={handleTeamClick} className="w-10 h-10 p-3">
          <IoArrowBack color="white" size={20} />
        </button>
      </div>
      {standingsData && (
        <>
          {standingsData.map((league) => (
            <div
              key={league.league.id}
              className="bg-[#1d1d1d] text-white rounded-lg shadow-md mb-4overflow-hidden"
            >
              <div className="flex items-center mb-4 p-4 bg-[#1d1d1d]">
                <img
                  src={
                    "https://b.fssta.com/uploads/application/soccer/competition-logos/EnglishPremierLeague.png"
                  }
                  alt={league.league.name}
                  width={80}
                  className="mr-4 rounded-full bg-contain"
                />
              </div>
              <div className="overflow-x-auto bg-[#1d1d1d]">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-[#1d1d1d]">
                      <th className="py-2 px-4 border-b">Pos</th>
                      <th className="border-b">Team</th>
                      <th className="border-b">Played</th>
                      <th className="border-b">W</th>
                      <th className="border-b">D</th>
                      <th className="border-b">L</th>
                      <th className="border-b">GF</th>
                      <th className="border-b">GA</th>
                      <th className="border-b">GD</th>
                      <th className="border-b">Points</th>
                      <th className="border-b">Form</th>
                    </tr>
                  </thead>
                  <tbody>
                    {league.league.standings[0].map((team) => (
                      <tr key={team.team.id}>
                        <td className="py-2 px-4 border-b">{team.rank}</td>
                        <td className="border-b text-center">
                          <Link
                            to={`/team/${team.team.name}`}
                            className="flex items-center"
                          >
                            <img
                              src={team.team.logo}
                              alt={team.team.name}
                              width={24}
                              className="mr-2"
                            />
                            <span className="text-sm text-center">
                              {team.team.name}
                            </span>
                          </Link>
                        </td>

                        <td className="border-b text-center">
                          {team.all.played}
                        </td>
                        <td className="border-b text-center">{team.all.win}</td>
                        <td className="border-b text-center">
                          {team.all.draw}
                        </td>
                        <td className="border-b text-center">
                          {team.all.lose}
                        </td>
                        <td className="border-b text-center">
                          {team.all.goals.for}
                        </td>
                        <td className="border-b text-center">
                          {team.all.goals.against}
                        </td>
                        <td className="border-b text-center">
                          {team.goalsDiff}
                        </td>
                        <td className="border-b text-center">{team.points}</td>
                        <td className="border-b text-center">
                          {team.form.split("").map((form, index) => (
                            <span
                              key={index}
                              className={`${
                                form === "W"
                                  ? "bg-green-500"
                                  : form === "D"
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                              } text-white rounded-full mr-1`}
                              style={{
                                fontSize: "0.75rem",
                                minWidth: "1.5em",
                                textAlign: "center",
                                display: "inline-block",
                              }}
                            >
                              {form}
                            </span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Standings;
