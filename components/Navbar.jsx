export default function Navbar() {
  return (
    <div className="navbar">
      <img src="/icons/2.png" width="70" alt="" />
      <ul>
        <li>Content</li>
        <li>Galleries</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <style jsx>{`
        .navbar img {
          padding: 0;
          margin: 0;
          opacity: 0.7;
          margin-left: -5px;
        }

        .navbar ul {
          margin: 1rem 0 0 0;
          padding: 0;
        }

        .navbar li {
          padding: 0.25rem 0;
          list-style: none;
        }

        .navbar li:nth-child(1) {
          padding-bottom: 20px;
        }

        .navbar ul li:not(:nth-child(1)) {
          line-height: 0.7;
        }

        .navbar li:hover {
          cursor: pointer;
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}
