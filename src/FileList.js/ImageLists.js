import { Link } from 'react-router-dom';
import '../Styles/ImageList.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
function DisplayImages() {
  const [imagesList, setImagesList] = useState([]);

  useEffect(() => {
    // Fetch images from backend
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:9091/v1/imageProduct/list-products");
        setImagesList(response.data); // Assuming the API returns a list of image URLs
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center mb-3">
            <h3 className="image-header">Images</h3>
            <Link to="/uploadto-AWS">
              <button className="btn btn-primary">Add Image</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {imagesList.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3 mb-3">
              <img
                className="img-fluid image-item"
                src={item.imageUrl}
                alt={`Image-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default DisplayImages;