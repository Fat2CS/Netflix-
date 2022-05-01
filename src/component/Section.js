import Carousel from "./carrousel";

// gère les catégories
const Section = ({ mainCategory }) => {
  return (
    <div style={{ backgroundColor: mainCategory.color }}>
      <p className="title">{mainCategory.category}</p>
      <Carousel images={mainCategory.images} />
    </div>
  );
};
export default Section;
