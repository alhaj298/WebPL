import Standings from "../Components/StandingBar";
import Matches from "../Components/Matches";
import NavBar from "../Components/NavBar";
import PlayerStats from "../Pages/PlayerStats";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col-reverse gap-5 md:gap-0  items-center justify-between md:flex-row md:justify-center md:items-start  bg-black p-5 ">
        <div className="flex flex-col gap-4 w-11/12 md:w-auto">
          <Standings />

          <PlayerStats />
        </div>

        <div className="w-full">
          <Matches />
        </div>

        {/* <div className="w-full  md:w-auto md:p-0">
          <Standings />
        </div> */}
      </div>
    </>
  );
};

export default HomePage;
