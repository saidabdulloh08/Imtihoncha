import React from "react";
import './Item.css'
import { useLoaderData } from "react-router-dom";
export default function Item() {
  const data = useLoaderData();
  return (
    <div>
      <ul className="list-film">
        {data.results.map((film) => (
          <li className="film-item" key={film.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
              className="img"
            />
            <div className="item-box">
              <h3 className="heading">{film.title}</h3>
              <br />
              <p className="id">Id: {film.id}</p>
              <br />
              <p className="overview">Overview: {film.overview}</p>
              <br />
              <p className="date">Date: {film.release_date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
