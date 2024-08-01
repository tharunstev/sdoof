// import "../style.css";
import { useState, createContext } from "react";
import React from "react";
import Recipe from "./main";
import "./nav.css";

// export const searchData = createContext();
const Navbar = () => {
  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState("");

  const searchhandler = (event) => {
    setSearch(event.target.value);
  };

  const cuisineHandler = (cuisineType) => {
    setCuisine(cuisineType);
  };

  return (
    <>
      <div className="nav">
        <div className="nav-one">
          <ul>
            <li style={{ fontSize: "18px", fontWeight: "900" }}>SDOOF</li>
            <li onClick={() => cuisineHandler("Mexican")}>MEXICAN</li>
            <li onClick={() => cuisineHandler("Italian")}>ITALIAN</li>
            <li onClick={() => cuisineHandler("Japanese")}>JAPANESE</li>
            <li onClick={() => cuisineHandler("Pakistani")}>PAKISTANI </li>
            <li onClick={() => cuisineHandler("Asian")}>ASIAN</li>
          </ul>
        </div>
        <div className="nav-line">
          <hr size="3" color="gray" style={{ width: "100px" }}></hr>
          <ul>
            <li>Youtube</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <input
              type="text"
              name=""
              id=""
              placeholder="SEARCH"
              onChange={searchhandler}
            />
          </ul>
        </div>
      </div>
      <Recipe search={search} cuisine={cuisine} />
    </>
  );
};

export default React.memo(Navbar);
