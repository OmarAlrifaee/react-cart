import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="p-5 d-flex justify-content-end gap-4 align-items-center">
      <Link to={"/"}>shop</Link>
      <Link to={"/cart"}>cart</Link>
    </nav>
  );
};

export default Navbar;
