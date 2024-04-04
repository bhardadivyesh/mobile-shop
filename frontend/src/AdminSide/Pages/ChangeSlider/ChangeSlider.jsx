import {useState,useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import ApiHelper from "../../../Helper/ApiHelper";

function ImageUploader() {
  const [sliderImages,setSliderImages] = useState({})
  const [images, setImages] = useState({
    image1: {
      file: null,
      base64String: null,
    },
    image2: {
      file: null,
      base64String: null,
    },
    image3: {
      file: null,
      base64String: null,
    },
    image4: {
      file: null,
      base64String: null,
    },
  });

  const handleImageChange = (imageName, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImages((prevState) => ({
          ...prevState,
          [imageName]: {
            file: file,
            base64String: base64String,
          },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async (imageName) => {
    const jsonImages = {};
    for (const key in images) {
      if (images[key].base64String) {
        jsonImages[key] = images[key].base64String;
      }
    }
    console.log("Images in JSON format:", jsonImages);

    await (
      await fetch("http://localhost:3000/put-imageSlider", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonImages),
      })
    ).json();
    // Perform upload logic here if needed
    console.log(`Uploaded image ${imageName}:`, images[imageName].base64String);
  };
  
  useEffect(()=>{
    const request = {
      path: `get-imageSlider`,
    };
    const fetchData = async () => {
        const response = await ApiHelper.get(request);
        console.log(response.data);
        setSliderImages(response.data);
      }
    fetchData();
  },[])

  return (
    <>
    <Navbar />
    <div className="ml-10 h-auto bg-slate-300 rounded-lg border-blue-800 border-2 p-4">
      <div className="flex flex-wrap mb-4">
        <div className="w-full sm:w-1/2 mb-4 sm:pr-2">
          <h1 className="bg-blue-800 p-6 rounded-md text-center text-white">
            Image 1
          </h1>
          <img
            src={sliderImages[0]?.image1}
            alt="image1"
            className="w-full h-36"
          />
          <input
            type="file"
            className="pl-60"
            onChange={(e) => handleImageChange("image1", e)}
          />
          <button
            type="button"
            onClick={() => handleUpload("image1")}
            className="ml-2 text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Upload Image 1
          </button>
        </div>
        <div className="w-full sm:w-1/2 mb-4 sm:pl-2">
          <h1 className="bg-blue-800 p-6 rounded-md text-center text-white">
            Image 2
          </h1>
          <img
            src={sliderImages[0]?.image2}
            alt="image2"
            className="w-full h-36"
          />
          <input
            type="file"
            className="pl-60"
            onChange={(e) => handleImageChange("image2", e)}
          />
          <button
            type="button"
            onClick={() => handleUpload("image2")}
            className="ml-2 text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Upload Image 2
          </button>
        </div>
      </div>
      <div className="flex flex-wrap mb-4">
        <div className="w-full sm:w-1/2 mb-4 sm:pr-2">
          <h1 className="bg-blue-800 p-6 rounded-md text-center text-white">
            Image 3
          </h1>
          <img
            src={sliderImages[0]?.image3}
            alt="image3"
            className="w-full h-36"
          />
          <input
            type="file"
            className="pl-60"
            onChange={(e) => handleImageChange("image3", e)}
          />
          <button
            type="button"
            onClick={() => handleUpload("image3")}
            className="ml-2 text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Upload Image 3
          </button>
        </div>
        <div className="w-full sm:w-1/2 mb-4 sm:pl-2">
          <h1 className="bg-blue-800 p-6 rounded-md text-center text-white">
            Image 4
          </h1>
          <img
            src={sliderImages[0]?.image4}
            alt="image4"
            className="w-full h-36"
          />
          <input
            type="file"
            className="pl-60"
            onChange={(e) => handleImageChange("image4", e)}
          />
          <button
            type="button"
            onClick={() => handleUpload("image4")}
            className="ml-2 text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Upload Image 4
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </>
  
  
  );
}

export default ImageUploader;
