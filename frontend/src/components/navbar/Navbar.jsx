import {BrowserRouter} from "react-router-dom";
import './Navbar.css';
// import logo from "../../assets/bg/Logo.png";
import {Link} from "react-scroll";

const Navbar = () => {

    const menus = [
        {title: "Home", url: "home"},
        {title: "Reason", url: "most"},
        {title: "View Point", url: "viewpoint"},
        {title: "Book Now", url: ""},
        
    ]
  return (
    <BrowserRouter>
    <nav className='flex justify-between items-center px-4 md:px-10 lg:px-[140px] py-5'>
        <a href=""><h1 className="text-white text-[24px] md:text-[28px] lg:text-[30px]">TripNest</h1></a>
        <div className='bg-[#4A8087] bg-opacity-[70%] py-2 px-6 md:px-[5rem] rounded-[40px] mt-3'>
            <ul className='flex flex-col lg:flex-row text-white text-[14px] md:text-[16px] uppercase gap-4 lg:gap-[6rem]'>
                {
                    menus.map((menu, i) => (
                        <li key={i}> 
                            <Link
                                to={menu.url}
                                spy={true} 
                                smooth={true} 
                                offset={50} 
                                duration={500} 
                                delay={500}
                                className="hover:border-b-2 border-white transform duration-150 cursor-pointer"
                            >
                                {menu.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
</BrowserRouter>

  )
}

export default Navbar