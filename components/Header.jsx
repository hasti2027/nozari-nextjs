import { useState } from "react";
import Navbar from "./Navbar";
import RightNav from "./RightNav";
import Socials from "./Socials";

export default function Header() {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <div className="header">
      <div className="top">
        <h1>YASAMAN NOZARI</h1>
        <p className="menu" onClick={() => setMenuClicked(!menuClicked)}>
          menu
        </p>
      </div>
      <div className="navbar-socials">
        <div>
          <Navbar />
          <Socials />
        </div>

        <div className="right-nav-header">
          <RightNav menuClicked={menuClicked} />
        </div>
      </div>

      <style jsx>{`
        .header {
          margin: 0.5rem 1rem;
        }

        .menu {
          display: none;
        }

        .top h1 {
          display: none;
        }

        .right-nav-header {
          display: none;
        }

        @media only screen and (max-width: 700px) {
          .top {
            position: fixed;
            right: 0;
            left: 0;
            top: 0;
            padding: 0.25rem 0.5rem;
            margin-bottom: 0.5rem;
            background-color: rgba(255, 255, 255, 0.9);
          }

          .navbar-socials {
            width: 100%;
            position: fixed;
            top: 40px;
            left: 0;
            bottom: 0;
            background-color: rgba(255, 255, 255, 0.9);
            padding: 2rem 0.5rem;
            transition: transform 0.5s ease-in;
            transform: ${menuClicked ? "translateX(0)" : "translateX(100%)"};
          }

          .header {
            margin: 0 5vw;
            width: 100%;
          }

          .top h1 {
            display: block;
            margin: 0;
            font-size: 1.4rem;
            font-family: "Audiowide", cursive;
          }

          .right-nav-header {
            display: block;
          }

          .top {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          .menu {
            display: block;
          }

          .menu:hover {
            cursor: pointer;
          }

          .header .navbar-socials {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
