// import { Route, Routes } from "react-router-dom";
import { useModal } from "../../../context/popup";
import SingOutBut from "../../Button/singOutBut";
import style from "../profil.module.css"
import SingOutPopUp from "./singOutPopUp";



const OutPopUp = () => {
    const { modeActive, setModeActive } = useModal()

    return (

        <SingOutPopUp active={modeActive} setActive={setModeActive}>
            <div className={style.cen}>
                <div className={style.cont}>Get out so early</div>
                <div className={style.cont}>
                    <SingOutBut />
                </div>
            </div>
        </SingOutPopUp>


    );
};

export default OutPopUp;