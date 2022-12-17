import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from './context/contextApi';
import { SkeletonTheme } from "react-loading-skeleton";

export default function App() {
  return (
    <AppContext>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header/>
            <Routes>
              <Route path="/" exact element={<Feed/>}></Route>
              <Route path="/searchResult/:searchQuery" element={<SearchResult/>}></Route>
              <Route path="/video/:id" element={<VideoDetails/>}></Route>
            </Routes>
        </div>
      </BrowserRouter>
      </SkeletonTheme>
    </AppContext>
  );
};
