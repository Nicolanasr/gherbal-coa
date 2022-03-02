import React from "react";

import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import Home from "./pages/home";

const App = () => {
  const languages = ["en", "ar"];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/en"} />} />

        {languages.map((lang) => {
          return <Route key={lang} path={`/${lang}`} exact element={<Home lang={`/${lang}`} />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
