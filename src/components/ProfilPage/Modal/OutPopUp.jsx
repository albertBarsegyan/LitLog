import { useModal } from "../../../context/popup";
import SignOutBut from "../../Button/singOutBut";
import style from "../profil.module.css"
import SingOutPopUp from "./singOutPopUp";


const OutPopUp = () => {
    const { modeActive, setModeActive } = useModal()

    return (
        <SingOutPopUp active={modeActive} setActive={setModeActive}>
            <div className={style.cen}>
                <div className={style.cont}>Get out so early</div>
                <div className={style.cont}>
                    <SignOutBut />
                </div>
            </div>
        </SingOutPopUp>

    );
};

export default OutPopUp;