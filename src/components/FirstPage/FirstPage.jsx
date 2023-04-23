import Header from '../Header/Header'
import HeadingPage from "../ContentHeadingPage/ContentHeadingPage";
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import RegIn from '../Button/ReginBut';

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