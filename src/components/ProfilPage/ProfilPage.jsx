import style from "./profil.module.css"
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import CenterSite from './CenterSite/CenterSite';
import PopUp from "./Modal/PopUp";
import OutPopUp from "./Modal/OutPopUp";
import { Route, Routes } from "react-router-dom";
import { RouteConstant } from "../../constants/RouteCostant";
import LoginPage from "../LoginPage/LoginPage";

const ProfilPage = () => {

    return (
        <div className={style.side}>

            <div>
                <LeftSide />
            </div>
            <div>
                <RightSide />
                <CenterSite />
            </div>
            <PopUp />
            <OutPopUp />

            <Routes>
                <Route path={RouteConstant.PrifilPage} element={<LoginPage />} />
            </Routes>
        </div>
    );
};

export default ProfilPage;