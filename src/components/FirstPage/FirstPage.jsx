import Header from '../Header/Header'
import HeadingPage from "../ContentHeadingPage/ContentHeadingPage";
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import LoginPage from '../LoginPage/LoginPage';
import RegIn from '../Button/ReginBut';
=======
// import { RouteConstant } from '../../constants/RouteCostant';
// import LoginPage from '../LoginPage/LoginPage';
// import { Registration } from '../Registration/Registration';
>>>>>>> 8e473351cc63e527e0b2b700df4ea5e10390303f

export function FirstPage() {

    return (
        <div>
            <Header />
            
            <div>
                <HeadingPage />
                
            </div>
            <Footer />
    
        </div>

    )
}