import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Video } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";
import Data from "../utils/data.js";
import { useParams } from "react-router-dom";
function SearchFeed() {
  // console.log(Data);
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();
  useEffect(() => {
    const unSubscribe = fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error("Error " + error));
    return () => unSubscribe;
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results For:{" "}
        <span style={{ color: "#f31503" }}>{searchTerm}s</span> videos
      </Typography>
      {/* <Video videos={ videos} /> */}
      <Video videos={videos} />
    </Box>
  );
}

export default SearchFeed;
