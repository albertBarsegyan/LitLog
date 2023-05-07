import style from "./profil.module.css"
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import CenterSite from './CenterSite/CenterSite';
import PopUp from "./Modal/PopUp";
import FriendsPage from "./FrindsPage/FriendsPage";


const ProfilPage = () => {

    return (
        <div className={style.side}>

            <div>
                <LeftSide />
            </div>
            <div>
                <RightSide />
                <CenterSite />
                <FriendsPage />
            </div>
            <PopUp />

        </div>
    );
};

export default ProfilPage;