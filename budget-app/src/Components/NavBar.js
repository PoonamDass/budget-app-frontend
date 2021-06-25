import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav class="navbar  navbar-expand-lg navbar-light bg-light">
      
        <NavLink  to="/transactions" class="nav-item nav-link ">Transactions</NavLink>
      
        <NavLink to="/transactions/new" class="nav-item nav-link">New Transaction</NavLink>
    </nav>
  );
}
