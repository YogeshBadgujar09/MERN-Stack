import axios from "axios";
import { useEffect, useState } from "react";

function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const res = await axios.get("http://localhost:5000/api/images");
    setImages(res.data);
  };

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        
        <h2>Image Gallery</h2>

      {images.map((img) => (
        <img
          key={img._id}
          src={`http://localhost:5000/uploads/${img.imagePath}`}
          alt="uploaded"
          width="200"
          height="200"
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      ))}
    </div>
  );
}

export default ImageGallery;
