// import { Link } from "react-router-dom";
// import Fexture from "../assets/Fexture.json";

// const Matches = () => {
//   const matches = Fexture.response;
//   const first = matches.slice(0, 10);
//   // bg-[#262626]
//   return (
//     <div className="bg-[#1d1d1d] w-4/5  p-2 md:p-3 m-auto rounded-lg">
//       <h1 className="text-3xl font-bold mb-6 text-white text-center">
//         Dummy Matches
//       </h1>
//       {first.map((match, index) => (
//         <div
//           key={index}
//           className="bg-[#333333] text-white rounded-lg shadow-md p-4 mb-4  md:mb-3 flex flex-col sm:flex-row justify-around items-center h-auto w-full"
//         >
//           <div className="flex flex-col justify-center items-center text-center mb-4 md:mb-0 h-20 w-24">
//             <Link to={`/team/${match.teams.home.name}`}>
//               <img
//                 src={match.teams.home.logo}
//                 alt={`${match.teams.home.name} Logo`}
//                 className="w-12 h-12  mb-2 md:mb-1"
//               />
//             </Link>

//             <p className="font-semibold text-center break-words	">
//               {match.teams.home.name}
//             </p>
//           </div>

//           <div className="text-sm mb-4 md:mb-0 text-white text-center p-2 rounded">
//             <p>{new Date(match.fixture.date).toLocaleDateString()}</p>
//             <p>
//               {new Date(match.fixture.date).toLocaleTimeString().slice(0, 5)}
//             </p>
//             <div className="">
//               <p>{match.fixture.venue.name}</p>
//             </div>
//           </div>

//           <div className="flex flex-col justify-center items-center text-center h-20 w-24 mb-1 md:mb-0">
//             <Link to={`/team/${match.teams.away.name}`}>
//               <img
//                 src={match.teams.away.logo}
//                 alt={`${match.teams.away.name} Logo`}
//                 className="w-12  mb-2 md:mb-1"
//               />
//             </Link>

//             <p className="font-semibold">{match.teams.away.name}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Matches;

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fetchData } from "../API/api";

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const cacheKey = "matchesCache";

    const fetchMatches = async () => {
      try {
        const endpoint =
          "v3/fixtures?league=39&season=2023&from=2024-01-04&to=2024-04-28";
        const data = await fetchData("GET", endpoint, cacheKey);
        setMatches(data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMatches();

    // Then set up an interval to fetch  every 24 hours
    const intervalId = setInterval(fetchMatches, 24 * 60 * 60 * 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const filteredMatches = selectedDate
    ? matches.filter(
        (match) =>
          new Date(match.fixture.date).toLocaleDateString() ===
          selectedDate.toLocaleDateString()
      )
    : matches;

  // const TopMatches = filteredMatches.slice(0, 9);

  return (
    <div className="bg-[#1d1d1d] w-11/12 md:w-5/6 p-2 md:p-3 m-auto rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">
        Matches
      </h1>

      <div className="flex justify-center items-center mb-1">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select a date"
          className="p-2 rounded-sm mb-1 bg-[#333333] text-white"
        />
      </div>

      {filteredMatches && (
        <>
          {filteredMatches.map((match) => (
            <div
              key={match.fixture.id}
              className="bg-[#333333] text-white rounded-lg shadow-md p-4 mb-4 md:mb-3 flex flex-col sm:flex-row justify-around items-center h-auto w-full"
            >
              <div className="flex flex-col justify-center items-center text-center mb-4 md:mb-0 h-20 w-24">
                <Link to={`/team/${match.teams.home.name}`}>
                  <img
                    src={match.teams.home.logo}
                    alt={`${match.teams.home.name} Logo`}
                    className="w-12 h-12 mb-2 md:mb-1"
                  />
                </Link>
                <p className="font-semibold text-center break-words	">
                  {match.teams.home.name}
                </p>
              </div>

              <div className="text-sm mb-4 md:mb-0 text-white text-center p-2 rounded">
                <p>{new Date(match.fixture.date).toLocaleDateString()}</p>
                <p>
                  {new Date(match.fixture.date)
                    .toLocaleTimeString()
                    .slice(0, 5)}
                </p>
                <div className="">
                  <p className=" break-before-all">
                    {match.fixture.venue.name}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center text-center h-20 w-24 mb-1 md:mb-0">
                <Link to={`/team/${match.teams.away.name}`}>
                  <img
                    src={match.teams.away.logo}
                    alt={`${match.teams.away.name} Logo`}
                    className="w-12 mb-2 md:mb-1"
                  />
                </Link>
                <p className="font-semibold">{match.teams.away.name}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Matches;
