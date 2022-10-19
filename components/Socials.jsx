export default function Socials() {
  return (
    <div className="socials">
      <div className="social">
        <img src="icons/bx-envelope.svg" alt="" />
        <img src="icons/bxl-facebook.svg" alt="" />
        <img src="icons/bxl-instagram.svg" alt="" />
      </div>
      <div className="social">
        <img src="icons/bxl-pinterest-alt.svg" alt="" />
        <img src="icons/icons9-twitter.svg" height="20" alt="" />
      </div>

      <style jsx>{`
        .socials {
          padding: 1rem 0;
        }

        .social {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: flex-start;
          align-items: center;
          padding: 0;
          opacity: 0.7;
        }

        .socials img {
          margin: 0;
        }

        .socials:hover img {
          cursor: pointer;
          transition: all 0.3s ease-out;
          opacity: 0.5;
        }

        .socials:hover img:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
