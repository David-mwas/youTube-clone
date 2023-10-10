import React from "react";
import {
  demoChannelTitle,
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
} from "../utils/constants";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  //   console.log(videoId);
  return (
    <Card
      sx={{
        width: { xs: "90vw", sm: "90vw", md: "356px", lg: "356px" },
        boxShadow: "none",
        borderRadius: 2,
        background: "#333",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: "100%", height: "180px" }}
        />
      </Link>
      <CardContent sx={{ height: "106px", paddingLeft: 2, paddingTop: 2 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            // width="60%"
            // height="40px"
            variant="p"
            fontWeight="bold"
            fontSize="14px"
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="no-wrap"
            color="#fff"
          >
            {snippet?.title || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="gray"
            sx={{ marginBottom: 2 }}
          >
            {snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5 " }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
