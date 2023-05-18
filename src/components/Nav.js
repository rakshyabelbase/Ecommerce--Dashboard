import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = ()=>{
    const auth = localStorage.getItem('user');

   
    return(
        <div>
            <ul className="nav-ul">
                <li><Link to = "/">Products</Link></li>
                <li><Link to = "/add">Add Product</Link></li>
                <li><Link to = "/update">Update</Link></li>
                
                <li><Link to = "/profile">Profile</Link></li>
                <li>{auth ?<Link to = "/logout">Logout</Link>: <Link to = "/signup">SignUp</Link>}</li>
            </ul>
        </div>
    )
}
export default Nav;