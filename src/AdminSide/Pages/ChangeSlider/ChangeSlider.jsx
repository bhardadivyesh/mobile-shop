import Navbar from "../../Component/Navbar/Navbar"
import Footer from "../../Component/Footer/Footer"
import imageslider1 from "../../../assets/Sony product/imageslider1.avif"
import imageslider2 from "../../../assets/Sony product/imageslider2.avif"
import imageslider3 from "../../../assets/Sony product/imageslider3.avif"
import imageslider4 from "../../../assets/Sony product/imageslider4.avif"

const ChangeSlider = () => {
  return (
    <>
    <Navbar />
    <h1 className="m-6 text-4xl text-center">Change Slider Image</h1>
    <div className="grid grid-cols-2 gap-10 m-10">
      <div
        className="ml-10  h-96 bg-slate-300 rounded-lg border-blue-800 border-2 "
      >
        <h1 className="bg-blue-800 p-6 rounded-md text-center text-white">Image 1</h1>
        <img src={imageslider1} alt="image1" className="w-full h-36"/>
        <h2 className="m-4 text-center text-2xl">Select Image :</h2>
        <input type="file" className="pl-60" />
        <br />
        <button type="submit" className="ml-72 mt-4 text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Upload</button>
      </div>
      <div
        className="ml-10  h-96 bg-slate-300 rounded-lg border-blue-800 border-2 "
      >
        <h1 className="bg-blue-800 p-6 rounded-md text-center text-white">Image 2</h1> 
        <img src={imageslider2} alt="image2" className="w-full h-36"/>
        <h2 className="m-4 text-center text-2xl">Select Image :</h2>
        <input type="file" className="pl-60" />
        <br />
        <button type="submit" className="ml-72 mt-4 text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Upload</button>
      </div>
      <div
       className="ml-10  h-96 bg-slate-300 rounded-lg border-blue-800 border-2 "
      >
        <h1 className="bg-blue-800 p-6 rounded-md text-center text-white">Image 3</h1> 
        <img src={imageslider3} alt="image3" className="w-full h-36"/>
        <h2 className="m-4 text-center text-2xl">Select Image :</h2>
        <input type="file" className="pl-60" />
        <br />
        <button type="submit" className="ml-72 mt-4 text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Upload</button>
      </div>
      <div
       className="ml-10  h-96 bg-slate-300 rounded-lg border-blue-800 border-2 "
      >
        <h1 className="bg-blue-800 p-6 rounded-md text-center text-white">Image 4</h1> 
        <img src={imageslider4} alt="image4" className="w-full h-36"/>
        <h2 className="m-4 text-center text-2xl">Select Image :</h2>
        <input type="file" className="pl-60" />
        <br />
        <button type="submit" className="ml-72 mt-4 text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Upload</button>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default ChangeSlider;
