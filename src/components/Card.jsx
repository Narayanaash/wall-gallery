export default function Card({ image, setisModal, setmodalSrc }) {
  const handleClickZoom = () => {
    setisModal(true);
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
