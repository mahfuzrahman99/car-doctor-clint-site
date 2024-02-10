import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'><Outlet/></div>
            <Footer/>
            
        </div>
    );
};

export default MainLayout;