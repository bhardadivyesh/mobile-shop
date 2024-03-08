import Navbar from "../../component/Navbar/Navbar"
import Footer from "../../component/Footer/Footer"
const ContactUs = () =>{
    return(
        <>
       <Navbar />
       <div className="text-center">
        <h2 className="text-4xl text-center dark:text-white">Contact Us</h2>
        <h1 className="font-semibold p-5">:: Address ::</h1>
        <h1>The Sony Mobile Shop Customer Care,</h1>
        <h1>Madhuram, Junagadh.</h1>
        <h1>Pincode-3620001.</h1>
        <h1 className="font-semibold p-5">:: HelpLine Number ::</h1>
        <h1>+91 9327511543</h1>
        <h1 className="font-semibold p-5">:: Email ::</h1>
        <h1>bhardadivyesh9@gmail.com</h1>
       </div>
       <Footer />
        </>
    )
}

export default ContactUs;