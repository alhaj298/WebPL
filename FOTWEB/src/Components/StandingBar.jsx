// import standingsData from "../assets/dummyStanding.json";
// import { Link } from "react-router-dom";

// const Standings = () => {
//   const leagues = standingsData.response;

//   return (
//     <>
//       <Link to={"/premierleague"}>
//         {leagues.map((league) => (
//           <div
//             key={league.league.id}
//             className="bg-[#1d1d1d] rounded-lg shadow-md mb-4  w-full md:w-full p-1"
//           >
//             <div className="flex justify-center items-center mb-4">
//               <img
//                 src={league.league.logo}
//                 alt={league.league.name}
//                 width={80}
//                 className=" rounded-full bg-cover bg-white"
//               />
//             </div>
//             <div>
//               <table className="w-full bg-[#1d1d1d] text-slate-200">
//                 <thead>
//                   <tr>
//                     <th className=" border-b">Rank</th>
//                     <th className=" border-b">Team</th>
//                     <th className=" border-b">Played</th>
//                     <th className=" border-b">Points</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {league.league.standings[0].map((team) => (
//                     <tr key={team.team.id}>
//                       <td className=" border-b">{team.rank}</td>
//                       <td className=" border-b">
//                         <Link
//                           to={`/team/${team.team.name}`}
//                           className="flex items-center"
//                         >
//                           <img
//                             src={team.team.logo}
//                             alt={team.team.name}
//                             width={24}
//                             className="mr-2"
//                           />
//                           <span className="text-sm">{team.team.name}</span>
//                         </Link>
//                       </td>
//                       <td className=" border-b text-center">
//                         {team.all.played}
//                       </td>
//                       <td className=" border-b text-center">{team.points}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         ))}
//       </Link>
//     </>
//   );
// };

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../API/api";

const Standings = () => {
  const [standingsData, setStandingsData] = useState([]);

  useEffect(() => {
    const cacheKey = "PLstandingCache";

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
      {standingsData && (
        <>
          {standingsData.map((league) => (
            <Link to={"/premierleague"}>
              <div
                key={league.league.id}
                className="bg-[#1d1d1d]  text-white rounded-lg shadow-md mb-4  overflow-hidden"
              >
                <div className="flex justify-center items-center p-2 bg-[#2d2d2d]">
                  <img
                    src={
                      "https://b.fssta.com/uploads/application/soccer/competition-logos/EnglishPremierLeague.png"
                    }
                    alt={league.league.name}
                    width={80}
                    className="mr-4 rounded-full bg-contain"
                  />
                </div>
                <div className="overflow-x-auto p-2">
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="bg-[#1d1d1d]">
                        <th className=" border-b">Rank</th>
                        <th className=" border-b ">Team</th>
                        <th className=" border-b px-3">Played</th>
                        <th className=" border-b">Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {league.league.standings[0].map((team) => (
                        <tr key={team.team.id}>
                          <td className=" border-b">{team.rank}</td>
                          <td className=" border-b">
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
                              <span className="text-sm">{team.team.name}</span>
                            </Link>
                          </td>
                          <td className=" border-b text-center">
                            {team.all.played}
                          </td>
                          <td className=" border-b text-center">
                            {team.points}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
    </>
  );
};

export default Standings;
