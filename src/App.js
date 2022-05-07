import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayCerti from "./components/DisplayCerti";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/certi" element={<Show_certi/>}></Route>
          <Route path="/certi/:id" element={<DisplayCerti/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
