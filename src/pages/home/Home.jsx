import "./home.css";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import Modal from "../../components/modal";

const url = "https://www.mocky.io/v2/5ecb5c353000008f00ddd5a0";

export default function Home() {
  const [images, setimages] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [modalSrc, setmodalSrc] = useState("");
  // const [isModal, setisModal] = useState(false);
  const isModal = useMemo(() => Boolean(modalSrc), [modalSrc]);

  useEffect(() => {
    try {
      const fetchImages = async () => {
        const res = await axios.get(url);
        setimages(res.data);
        setisLoading(false);
      };
      fetchImages();
    } catch (error) {
      alert("Sorry the service is not available at the moment!");
    }
  }, []);

  return (
    <div className="container">
      <div className="gallery">
        {isLoading ? (
          <Loading />
        ) : (
          images.map((image) => (
            <Card key={image.id} image={image} setmodalSrc={setmodalSrc} />
          ))
        )}
      </div>
      <Modal source={modalSrc} isModal={isModal} setmodalSrc={setmodalSrc} />
    </div>
  );
}
