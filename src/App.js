import "./categories.style.scss";

const App = () => {
  const categories = [
    {
      id: 1,
      categoryTitle: "Hats",
      imgSrc: "",
    },
    {
      id: 2,
      categoryTitle: "Jackets",
      imgSrc: "",
    },
    {
      id: 3,
      categoryTitle: "Sneakers",
      imgSrc: "",
    },
    {
      id: 4,
      categoryTitle: "Womens",
      imgSrc: "",
    },
    {
      id: 5,
      categoryTitle: "Mens",
      imgSrc: "",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ id, categoryTitle, imgSrc }) => {
        return (
          <div key={id} className="category-container">
            <div className="background-image" src={imgSrc} />
            <div className="category-body-container">
              <h2>{categoryTitle}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
