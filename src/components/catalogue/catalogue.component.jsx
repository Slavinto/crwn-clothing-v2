import "./catalogue.styles.scss";
import CategoryItem from "../category-item/category-item.component.jsx";

const Catalogue = ({ categories }) => {
  return (
    <div className="catalogue">
      {categories.map(({ id, title, imageUrl }) => {
        return <CategoryItem key={id} title={title} imageUrl={imageUrl} />;
      })}
    </div>
  );
};

export default Catalogue;
