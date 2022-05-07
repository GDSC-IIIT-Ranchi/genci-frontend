import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Show_certi from "./components/Show_certi";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/certi" element={<Show_certi/>}></Route>
          <Route path="/certi/:id" element={<Form />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
