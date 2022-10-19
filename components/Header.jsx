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
        {menuClicked && (
          <div className="right-nav-header">
            <RightNav />
          </div>
        )}
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
          .header {
            margin: 0 5vw;
            width: 100%;
          }

          .top h1 {
            display: block;
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
            display: ${menuClicked ? "flex" : "none"};
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
