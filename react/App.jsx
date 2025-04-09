import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Sudoku from "./sudoku/Sudoku";
import Hangman from "./hangman/Hangman";
import Entry from "./Entry";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="sudoku" element={<Sudoku />} />
          <Route path="hangman" element={<Hangman />} />
          <Route path="*" element={<Entry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

