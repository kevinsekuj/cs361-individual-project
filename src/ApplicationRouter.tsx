import React from "react";
import { Routes, Route } from "react-router-dom";
import { GetImage, GetQuote, ReverseImageSearch } from "./components/index";

const ApplicationRouter = () => {
  return (
    <Routes>
      <Route path="/image" element={<GetImage />} />
      <Route path="/quote" element={<GetQuote />} />
      <Route path="/trace" element={<ReverseImageSearch />} />
    </Routes>
  );
};

export default ApplicationRouter;
