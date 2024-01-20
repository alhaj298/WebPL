// import TopPlayers from "../assets/TopScorrers.json";
// import { Link } from "react-router-dom";
// const TopScorrers = () => {
//   const players = TopPlayers.response;

//   const Top5Scorrers = players.slice(0, 5);

//   return (
//     <div className="md:w-72  bg-[#1d1d1d] text-white p-4 shadow-md">
//       <h1 className="text-lg font-bold mb-4 text-center">Dummy Top Scorers</h1>

//       {Top5Scorrers.map((player, id) => (
//         <Link to={`/playerinfo/${player.player.name}`}>
//           <div
//             key={id}
//             className="flex items-center justify-between mb-3 hover:bg-slate-300 p-2 rounded-md"
//           >
//             <div className="flex items-center">
//               <img
//                 src={player.player.photo}
//                 alt={player.player.name}
//                 className="w-12 h-12 rounded-full mr-4"
//               />
//               <div>
//                 <p className="text-sm font-bold">{player.player.name}</p>
//                 <p className="text-xs text-gray-500">
//                   Nationality: {player.player.nationality}
//                 </p>
//               </div>
//             </div>
//             <p className="text-lg font-bold">
//               {player.statistics[0].goals.total}
//             </p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default TopScorrers;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../API/api";

const TopScorrers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const cacheKey = "topScorrersCache";

    const fetchTopScorers = async () => {
      try {
        const endpoint = "v3/players/topscorers?league=39&season=2023";
        const data = await fetchData("GET", endpoint, cacheKey);
        setPlayers(data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopScorers();

    // Then set up an interval to fetch  every 24 hours
    const intervalId = setInterval(fetchTopScorers, 24 * 60 * 60 * 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="md:w-72 bg-[#1d1d1d] text-white p-4 shadow-md">
      <h1 className="text-lg font-bold mb-4 text-center">Top Scorers</h1>

      {players && (
        <>
          {players.map((player, id) => (
            // <Link to={`/playerinfo/${player.player.name}`} key={id}>
            <div
              className="flex items-center justify-between mb-3 hover:bg-slate-300 p-2 rounded-md"
              key={id}
            >
              <div className="flex items-center">
                {player.player && player.player.photo && (
                  <img
                    src={player.player.photo}
                    alt={player.player.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                )}
                <div>
                  <p className="text-sm font-bold">{player.player.name}</p>
                  <p className="text-xs text-gray-500">
                    Nationality: {player.player.nationality}
                  </p>
                </div>
              </div>
              <p className="text-lg font-bold">
                {player.statistics[0].goals.total}
              </p>
            </div>
            // </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default TopScorrers;
