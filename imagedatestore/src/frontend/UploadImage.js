import axios from "axios";
import { useState } from "react";

function UploadImage() {
  const [image, setImage] = useState(null);

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("image", image);

    await axios.post("http://localhost:5000/api/images/upload", formData);
    alert("Image Uploaded");
  };

  return (
    <>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={uploadImage}>Upload</button>
    </>
  );
}

export default UploadImage;
