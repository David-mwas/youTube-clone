import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import {
  NavBar,
  SearchFeed,
  ChannelDetail,
  VideoDetails,
  Feed,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ background: "#000" }}>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
          <Route path="/" element={<Feed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
