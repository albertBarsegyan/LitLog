import style from "./profil.module.css"
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import CenterSite from './CenterSite/CenterSite';
import PopUp from "./Modal/PopUp";
import SingOutPopUp from "./Modal/singOutPopUp"
import { useModal } from "../../context/popup";

const ProfilPage = () => {
    const { modeActive, setModeActive } = useModal()
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

            <SingOutPopUp active={modeActive} setActive={setModeActive}>
                <p>Get out so early</p>

            </SingOutPopUp>
        </div>
    );
};

export default ProfilPage;