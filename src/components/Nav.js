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
        <li>
          <a href="https://plantparenthood.herokuapp.com/">Project 2</a>
        </li>
        <li>
          <a href="https://arcane-dusk-42730.herokuapp.com/">Project 3</a>
        </li>
      </nav>
    </div>
  );
}
