import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Team from "./Components/Team";
import FullStanding from "./Components/FullStanding";
// import TopPlayersInfo from "./Components/TopPlayersInfo";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team/:name" element={<Team />} />
          <Route path="/premierleague" element={<FullStanding />} />
          {/* <Route path="/playerinfo/:name" element={<TopPlayersInfo />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
