import React from "react";

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <div className="bar border">
      <nav>
        <li>
          <a href="#home" onClick={() => handlePageChange("Home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => handlePageChange("About")}>
            About Me
          </a>
        </li>
        <li>
          <a href="mailto:roddazad@gmail.com">Contact </a>
        </li>
        <li>
          <a href="https://github.com/roddazad">My Github Page</a>
        </li>
        <li>
          <a href="https://vanwykkim.github.io/movie-lookup/">Project 1</a>
        </li>
        {/* <li>
          <a href="https://plant-app-1-774b2d3b1fcd.herokuapp.com/">Project 2</a>
        </li> */}
        <li>
          <a href="https://sidehustle-2-b9e1b7f60bb4.herokuapp.com/">Project 2</a>
        </li>
        <li>
          <a href="https://docs.google.com/document/d/1DF6utlQg9zmOu2U4khxDjs1CQnR4yZ3PVqWULEeslNk/edit?usp=sharing">My Resume</a>
        </li>
      </nav>
    </div>
  );
}
