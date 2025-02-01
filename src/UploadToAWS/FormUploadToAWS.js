import axios from "axios";
import { useEffect, useState } from "react";
import '../Styles/FileStyles.css';
import { Link } from "react-router-dom";
function FormUploadImage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:9091/v1/imageProduct/add-products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setImageUrl(response.data); // Assuming the API returns the S3 URL
      setMessage("Image uploaded successfully!");
    } catch (error) {
      setMessage("Error uploading image.");
      console.error(error);
    }
  };
  return (
    <>
      <div className="form-container">
        <h1 className="heading text-center">Image Upload To AWS S3</h1>
        <h2 className="title text-center">Upload Image</h2>
        <div className="upload-container">
          <label htmlFor="file-upload" className="file-upload-label">
            <span className="text-file">Choose a file</span>
            <input type="file" id="file-upload" className="file-upload-input" onChange={handleFileChange} />
          </label>
          <button className="btn btn-primary mt-3" onClick={handleUpload}>
            Upload
          </button>
        </div>
        {message && <p className="message">{message}</p>}
        {imageUrl && <img src={imageUrl} alt="Uploaded" className="img-preview" />}
        <Link to="/">
          <button className="btn btn-secondary mt-3">Go Back</button>
        </Link>
      </div>
    </>
  )
}
export default FormUploadImage;