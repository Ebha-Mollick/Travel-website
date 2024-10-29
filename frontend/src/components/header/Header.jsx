import { useContext, createContext, useState } from 'react';
import './Header.css';
import { FaYoutube } from "react-icons/fa";
import Slider from '../../utils/slider/Slider';

// Create a context for activeSlideIndex
const SliderContext = createContext();

const contentData = [
    {
        state: "Goa",
        title: "Explore Goa",
    },
    {
        state: "Himachal",
        title: "Explore Himachal",
    },
    {
        state: "Kerala",
        title: "Explore Kerala",
    },
];

const Header = () => {
    // Get activeSlideIndex from the context
    const { activeSlideIndex } = useContext(SliderContext);

    const handleClass = (activeSlideIndex) => {
        const { state, title } = contentData[activeSlideIndex] || {};

        if (state && title) {
            return (
                <div>
                    <h1 className="text-[144px] text-white font-Montserrat font-[800] leading-[140px]">
                        Explore <br />
                        <span className={`state ${state}`} data-state={state}>
                            {state}
                        </span>
                    </h1>
                    <p className='text-white mt-[70px] p-2 w-[95%] font-semibold '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deserunt, earum ipsa cum explicabo obcaecati ratione at sapiente rem ipsum minus quia voluptas doloremque cumque assumenda dignissimos fugit exercitationem odio.
                    </p>
                </div>
            );
        }

        return null;
    };

    const classChange = handleClass(activeSlideIndex);

    return (
        <div className='flex items-center mt-[40px] ml-16'>
            <div className=''>
                {classChange}
                <div className='mt-[100px] flex gap-12'>
                    <button className='border-2 border-[#00A1B9] text-[20px] px-6 py-2 font-semibold text-white hover:text-[#00A1B9]'>Book Now</button>
                    <button className='flex items-center gap-2'> 
                        <FaYoutube className='text-red-700 text-[40px]'/> 
                       <span className='text-white '>Watch Videos like this</span> 
                        </button>
                </div>
            </div>
            <div className='w-1/2 flex flex-col items-end justify-end relative'>
                <div>
                    <Slider/>
                </div>
                <div>
                    Social icons here
                </div>
            </div>
        </div>
    );
};

// Define a component that wraps Header with SliderContext.Provider
const HeaderWithProvider = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0); // Set initial activeSlideIndex

    return (
        <SliderContext.Provider value={{ activeSlideIndex }}>
            <Header />
            {/* Example button to change the active slide */}
            <button onClick={() => setActiveSlideIndex((prev) => (prev + 1) % contentData.length)}>
                Next Slide
            </button>
        </SliderContext.Provider>
    );
};

export default HeaderWithProvider;
