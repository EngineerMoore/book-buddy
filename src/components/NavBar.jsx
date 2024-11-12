import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <Link to="/books">Inventory</Link>
    <Link to="/login">Log In</Link>
    <Link to="/register">Register</Link>
    <Link to="/account">Profile</Link>
    
    </>
  )
}
export default NavBar