import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayCerti from "./components/DisplayCerti";
import ShowCerti from "./components/ShowCerti";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/certi/:id" element={<DisplayCerti />}></Route>
          <Route path="/certi" element={<ShowCerti />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
