
type Props = {}

const Footer = (props: Props) => {
    const linkcss= "hover:text-pink-600 transition duration-300";
    
  return (
        <footer className="bg-pink-400 md:text-lg text-sm py-6">
          {/* Navbar */}
          <nav className="flex justify-center gap-6 mb-4">
            <a href="#home" className={linkcss}>Home</a>
            <a href="#benefits" className={linkcss}>Benefits</a>
            <a href="#ourclasses" className={linkcss}>Our Claasses</a>
            <a href="#contactus" className={linkcss}>Contact Us</a>
          </nav>
    
          {/* Copyright Section */}
          <div className="text-center text-sm text-pink-600">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
        </footer>
      );
    };
    export default Footer;
