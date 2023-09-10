import React from "react";
import logo from "../../logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { Navigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="header">
      <img onClick={() => navigate("/")} src={logo} alt="logo" />

      <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recent">Recently Added</Link>
        <Link to="/mylist">My List</Link>
      </div>

      <ImSearch />
    </nav>
  );
};

export default Header;
