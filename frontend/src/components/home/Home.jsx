import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className={`h-[1080px] overflow-hidden`}>
        <Navbar/>
        <Header/>
    </div>
  )
}

export default Home