import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <h3>Válasszon egy REACT alkalmazást!</h3>
      <nav>
        <ul>
          
          <li>
            <Link to="/sudoku">Sudoku</Link>
          </li><li>
            <Link to="/hangman">Akasztófa</Link>
          </li>
          <li>
          <Link to="/">Vissza</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
export default Layout;
