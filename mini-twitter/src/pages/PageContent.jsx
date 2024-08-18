import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

const PageContent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default PageContent;
