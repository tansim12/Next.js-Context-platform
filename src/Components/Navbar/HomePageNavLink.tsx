"use client"
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useMediaQuery } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";


const HomePageNavLink = () => {
  const [value, setValue] = React.useState<string>("one");

  const isMobile = useMediaQuery("(max-width:900px)");

  const handleChange = (event:React.SyntheticEvent, newValue:string) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Tabs
          orientation={isMobile ? "vertical" : "horizontal"}
          variant={isMobile ? "scrollable" : "standard"}
          value={value}
          onChange={handleChange}
          
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          className={`${isMobile || "ml-20"} z-50 text-white`}
        >
          <Tab value="one" label="Home" href="/ " component={Link} />
          <Tab
            value="two"
            label=" All Contest"
            href="/allContest "
            component={Link}
          />
          <Tab
            value="three"
            label="Leaderboard"
            href="/Leaderboard "
            component={Link}
          />
          <Tab
            value="four"
            label="Progress"
            href="/progress "
            component={Link}
          />
          <Tab
            value="five"
            label="Success"
            href="/success "
            component={Link}
          />
          {/* <Tab
            value="five"
            label="Find Us"
            to="/findUs "
            component={Link}
          /> */}
        </Tabs>
      </Box>
    </div>
  );
};

export default HomePageNavLink;
