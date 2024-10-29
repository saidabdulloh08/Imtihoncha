import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="site-header__inner">
            <ul className="list">
              <li className="item">
                <Link className="link" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="item">
                <Link className="link" to={"/popular"}>
                  Popular
                </Link>
              </li>
              <li className="item">
                <Link className="link" to={"/toprated"}>Top Rated</Link>
              </li>
              <li className="item">
                <Link className="link" to={"/upcoming"}>Up Coming</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
