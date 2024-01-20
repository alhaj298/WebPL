// import React from "react";
// import dummyPlayers from "../assets/dummyPlayers";

// const Players = () => {
//   const players = dummyPlayers.response[0].players;

//   return (
//     <div className="p-3 border border-black">
//       <h2>Players</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Number</th>
//             <th>Position</th>
//           </tr>
//         </thead>
//         <tbody>
//           {players.map((player) => (
//             <tr key={player.id}>
//               <td>{player.name}</td>
//               <td>{player.age}</td>
//               <td>{player.number}</td>
//               <td>{player.position}</td>
//               <td>
//                 <img
//                   src={player.photo}
//                   alt={player.name}
//                   style={{ width: "50px", height: "50px" }}
//                   className="rounded-full"
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Players;



// import React from "react";
// import dummyPlayers from "../assets/dummyPlayers";

// const Players = () => {
//   const players = dummyPlayers.response[0].players;

//   return (
//     <div className="p-3 border border-black">
//       <h2 className="text-2xl font-bold mb-4">Players</h2>
//       <div className="overflow-x-auto">
//         <table className="table-auto w-full">
//           <thead>
//             <tr>
//               <th className="px-4 py-2">Name</th>
//               <th className="px-4 py-2">Age</th>
//               <th className="px-4 py-2">Number</th>
//               <th className="px-4 py-2">Position</th>
//               <th className="px-4 py-2">Photo</th>
//             </tr>
//           </thead>
//           <tbody>
//             {players.map((player) => (
//               <tr key={player.id}>
//                 <td className="border px-4 py-2">{player.name}</td>
//                 <td className="border px-4 py-2">{player.age}</td>
//                 <td className="border px-4 py-2">{player.number}</td>
//                 <td className="border px-4 py-2">{player.position}</td>
//                 <td className="border px-4 py-2">
//                   <img
//                     src={player.photo}
//                     alt={player.name}
//                     className="w-12 h-12 rounded-full"
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Players;
