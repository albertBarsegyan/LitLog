import style from "./profil.module.css"
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import Modal from "./Modal/Modal";
import { usePopUp } from "../../context/popup";
import CenterSite from './CenterSite/CenterSite';


const ProfilPage = () => {

    const [modaleActive, setModaleActive] = usePopUp()

    return (
        <div className={style.side}>
            <div>
                <LeftSide />
            </div>
            <div>
                <RightSide />
                <CenterSite />
            </div>
            <Modal active={modaleActive} setActive={setModaleActive} >
                <span>Name</span>
                <span>Surname</span>
                <form>
                    <input type="file" placeholder='Images' />
                    <input type="password" placeholder='Current password' />
                    <input type="password" placeholder='Edit password' />
                    <input type="password" placeholder='Repeat password' />
                </form>
            </Modal>
        </div>
    );
};

export default ProfilPage;