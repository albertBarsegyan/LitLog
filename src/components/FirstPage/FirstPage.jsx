import Header from '../Header/Header';
import HeadingPage from '../ContentHeadingPage/ContentHeadingPage';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
// import { RouteConstant } from '../../constants/RouteCostant';
// import LoginPage from '../LoginPage/LoginPage';
// import { Registration } from '../Registration/Registration';

export function FirstPage() {

  return (
    <div>
      <Header />
      <div>
        <HeadingPage />
      </div>
      <Footer />
    </div>
  );
}

