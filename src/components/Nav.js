import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div>
    <img alt="logo" className="logo "src="data:image/png;base64,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"/>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              Logout({JSON.parse(auth).name})
            </Link>
          </li>
          {/* <li>{auth ?<Link onClick={logout} to = "/signup">Logout</Link>: <Link to = "/signup">Sign Up</Link>}</li>
                <li><Link to = "/login">Login</Link></li> */}
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            {" "}
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Nav;
