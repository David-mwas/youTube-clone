import { Stack } from "@mui/material";
import React from "react";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
// import { YouTube } from "@material-ui/icons";
import SearchBar from "./SearchBar";
function NavBar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        zIndex: 100,
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" width={45} height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default NavBar;
