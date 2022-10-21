import { useState } from "react";

export default function Navbar() {
  const [contentClicked, setContentClicked] = useState(false);

  const contents = [
    { id: 1, title: "2022" },
    { id: 2, title: "2021" },
    { id: 3, title: "2020" },
    { id: 4, title: "2019" },
    { id: 5, title: "2018" },
  ];

  return (
    <div className="navbar">
      <img src="/icons/2.png" width="70" alt="" />
      <button onClick={() => setContentClicked(!contentClicked)}>
        Contents
      </button>
      <ul>
        <div className="contents">
          {contents.map((c) => (
            <li>{c.title}</li>
          ))}
        </div>

        <li className="about">About</li>
        <li>
          Looking for <br /> <span>design work?</span>
        </li>
      </ul>
      <style jsx>{`
        .navbar {
          min-width: 150px;
        }

        .navbar img {
          padding: 0;
          margin: 0;
          opacity: 0.7;
          margin-left: -5px;
        }

        .contents {
          transition: height 0.5s ease-in-out;
          height: ${contentClicked ? "160px" : "0"};
          overflow: hidden;
        }

        button {
          display: block;
          background-color: white;
          border: none;
          cursor: pointer;
          font-size: large;
          margin: 0;
          padding: 1rem 0 0 0;
        }

        .navbar ul {
          margin: 1rem 0 0 0;
          padding: 0;
        }

        .navbar li {
          padding: 0.25rem 0;
          list-style: none;
        }

        .navbar .about {
          padding-top: 1rem;
        }

        li span {
          padding-top: 0.25rem;
        }

        .navbar li:hover {
          cursor: pointer;
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}
