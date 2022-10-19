export default function Images() {
  const imagesSrc = [
    {
      id: 1,
      imgSrc: "IMG_20200911_000513_022.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt",
    },
    {
      id: 2,
      imgSrc: "IMG_20200912_090436_500.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt",
    },
    {
      id: 3,
      imgSrc: "IMG_20200912_090436_502.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt",
    },
    {
      id: 4,
      imgSrc: "IMG_20200912_090436_503.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt",
    },
    {
      id: 5,
      imgSrc: "IMG_20200912_090436_508.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt",
    },
    {
      id: 6,
      imgSrc: "IMG_20200912_090436_548.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt",
    },
    {
      id: 7,
      imgSrc: "IMG_20200912_090436_549.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt",
    },
    {
      id: 8,
      imgSrc: "IMG_20200912_090436_552.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt",
    },
  ];

  const imgSrcLength = imagesSrc.length;

  return (
    <div className="images">
      <h1>YASAMAN NOZARI</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt
        consequatur in quasi doloribus distinctio nesciunt consectetur nam,
        sapiente labore! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Veniam incidunt consequatur in quasi doloribus distinctio nesciunt
        consectetur nam, sapiente labore!
      </p>
      {imagesSrc.map((i, index) => (
        <div key={i.id}>
          <p>{i.title} Find More...</p>
          <img src={`/images/${i.imgSrc}`} alt="" width="200" />
          {index !== imgSrcLength - 1 && <hr />}
        </div>
      ))}
      <style jsx>{`
        h1 {
          font-size: larger;
          font-family: "Audiowide", cursive;
          margin-top: 1rem;
        }

        .images p {
          padding-right: 0.25rem;
        }

        .images img {
          margin: 0.25rem 0.25rem 0.25rem 0;
          width: 200px;
          height: 200px;
        }

        .images hr {
          margin-top: 2rem;
        }

        img:hover {
          cursor: pointer;
          filter: contrast(110%);
        }

        @media only screen and (max-width: 700px) {
          .images p {
            margin: 0.25rem;
          }

          .images img {
            width: 100%;
            height: auto;
            margin: 0.25rem;
          }

          .images h1 {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
