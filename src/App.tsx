import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieApp from "./pages/movies/movieApp"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieApp />} />
        <Route path="/mylist" element="" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
