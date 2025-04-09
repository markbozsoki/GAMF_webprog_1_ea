import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <h3>Válasszon egy REACT alkalmazást!</h3>
      <nav>
        <ul>
          
          <li>
            <Link to="/react.html/sudoku">Sudoku</Link>
          </li><li>
            <Link to="/react.html/hangman">Akasztófa</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
export default Layout;
