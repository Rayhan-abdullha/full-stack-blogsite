import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./category.css";
import { categories } from "../../db/db";
const Categories = () => {
  const location = useLocation();
  const path = location.pathname;
  const search = location.search;
  return (
    <div className="tab">
      <ul className="tabList">
        <Link
          style={{ background: path == "/" && !search && "red" }}
          to={`/`}
          className="tablink"
        >
          <li className="category">All Posts</li>
        </Link>
        {categories.map((c, index) => (
          <Link
            style={{ background: search === `?cat=${c}` && "red" }}
            to={`/?cat=${c}`}
            key={index}
            className="tablink"
          >
            <li className="category">{c}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
