import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Sudoku from "./sudoku/src/Sudoku";
import Contact from "./Contact";
export default function App2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="sudoku" element={<Sudoku />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

