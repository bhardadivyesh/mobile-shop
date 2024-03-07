import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

const AboutUs = () =>{
    return(
        <>
       <Navbar />
       <div className="text-center">
        <h2 className="text-4xl text-center dark:text-white p-7">About Us</h2>
        <h1 className="p-3">Welcome to THE SONY SHOP</h1>
        <p className="p-2">We aim to offer our customers a variety of the latest Sony Mobiles & Accessories. We’ve come a long way, so we know exactly which direction to take when supplying you with high quality yet budget friendly products. We offer all of this while providing excellent customer service and friendly support.</p>
        <p className="p-2">We always keep an eye on the latest trends in Mobiles Products and put our customers’ wishes first. That is why we have satisfied customers all over the world, and are thrilled to be a part of the Mobiles Products industry.</p>
        <p className="p-2">The interests of our customers are always the top priority for us, so we hope you will enjoy our products as much as we enjoy making them available to you.</p>
       </div>
       <Footer />
        </>
    )
}

export default AboutUs;