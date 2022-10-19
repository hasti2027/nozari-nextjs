export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>Content</li>
        <li>Galleries</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <style jsx>{`
        .footer {
          padding: 20px 0;
          background-color: #e5e4e2;
          margin: 0;
        }

        .footer ul {
          padding-top: 10px;
          display: flex;
          flex-diretion: row;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: space-around;
        }

        .footer li {
          list-style: none;
        }

        .footer li {
          transform: translate(-50%, -50%);
          transition: all 0.3s;
          cursor: pointer;
        }

        .footer li:after {
          content: "";
          width: 100%;
          height: 2px;
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: #848884;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }

        .footer li:hover {
          background: linear-gradient(to right, #36454f 10%, #896f9c 70%);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }

        .footer li:hover:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
    </div>
  );
}
