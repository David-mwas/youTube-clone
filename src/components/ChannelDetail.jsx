import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Video, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";
import Data from "../utils/data";
function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [video, setVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const unSubscribe = fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))
      .catch((error) => console.error("Error " + error));

    const unSubscribe2 = fetchFromAPI(
      `search?channelId=${id}&part=snippet&order=date`
    )
      .then((data) => setVideo(data?.items))
      .catch((error) => console.error("Error " + error));
    return () => (unSubscribe, unSubscribe2);
  }, [id]);
  return (
    // background-color: #4158D0;
    // background-image: linear-gradient();

    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Video videos={video} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
