export default function Card({ image, setisModal, setmodalSrc }) {
  const handleClickZoom = () => {
    setmodalSrc(image.urls.regular);
    setmodalSrc(image.urls.regular);
  };
  return (
    <img
      src={image.urls.thumb}
      alt={image.alt_description}
      onClick={handleClickZoom}
    />
  );
}
