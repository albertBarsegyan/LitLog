import style from "./profil.module.css"
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import CenterSite from './CenterSite/CenterSite';
import PopUp from "./Modal/PopUp";
import OutPopUp from "./Modal/OutPopUp";

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


        </div>
    );
};

export default ProfilPage;