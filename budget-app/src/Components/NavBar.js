import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav class="navbar  navbar-expand-lg navbar-light bg-light">
      
        <NavLink  to="/transactions" >Transactions</NavLink>
      
        <NavLink to="/transactions/new">New Transaction</NavLink>
    </nav>
  );
}
