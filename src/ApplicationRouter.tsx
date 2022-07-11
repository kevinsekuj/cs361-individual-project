import React from "react";
import { Routes, Route } from "react-router-dom";
import { GetImage, GetQuote, ReverseImageSearch } from "./components/index";

const ApplicationRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<GetImage />} />
      <Route path="/quote" element={<GetQuote />} />
      <Route path="/trace" element={<ReverseImageSearch />} />
      <Route path="*" element={<GetImage />} />
    </Routes>
  );
};

export default ApplicationRouter;
