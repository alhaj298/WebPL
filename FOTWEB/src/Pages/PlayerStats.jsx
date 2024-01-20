import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TopAssists from "../Components/TopAssists";
import TopScorrers from "../Components/TopScorrers";

export default function ColorTabs() {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "96.5%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        className="bg-[#262626] text-white flex justify-center items-center"
      >
        <Tab
          value="one"
          label="Top Scorers
"
        />
        <Tab
          value="two"
          label="Top Assists
"
          className="flex justify-center items-center text-center"
        />
      </Tabs>

      {/* Conditionally render the component based on the selected tab value */}
      {value === "one" && <TopScorrers />}
      {value === "two" && <TopAssists />}
    </Box>
  );
}
