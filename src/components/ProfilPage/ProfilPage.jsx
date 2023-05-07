import style from "./profil.module.css"
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import CenterSite from './CenterSite/CenterSite';
import PopUp from "./Modal/PopUp";
import Books from "../Books/Books";


const ProfilPage = () => {

    return (
        <div className={style.side}>

            <div>
                <LeftSide />
            </div>
            <div>

            </div>
            {/*<div>
                <RightSide />
                <CenterSite />
                </div>
            <PopUp /> */}
            <div>
                <RightSide />
                <Books />
            </div>
        </div>
    );
};

export default ProfilPage;