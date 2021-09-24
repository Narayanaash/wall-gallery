export default function Card({ image }) {
  return <img src={image.urls.thumb} alt={image.alt_description} />;
}
