import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Video, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { Unsubscribe } from "@mui/icons-material";
function ChannelDetail() {
  const [ChannelDetail, setChannelDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const unSubscribe = fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))
      .catch((error) => console.error("Error " + error));
    return () => unSubscribe;
  }, [id]);
  return <div>ChannelDetail</div>;
}

export default ChannelDetail;
