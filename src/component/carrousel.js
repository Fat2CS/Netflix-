const Carousel = ({ images }) => {
  //gère les images
  return (
    <div className="line">
      {images.map((imageUrl, indexOfimage) => {
        return <img key={indexOfimage} src={imageUrl} alt="" />;
      })}
    </div>
  );
};

export default Carousel;
