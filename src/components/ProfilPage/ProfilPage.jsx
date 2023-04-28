import style from "./profil.module.css"
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import Modal from "./Modal/Modal";
import { usePopUp } from "../../context/popup";
import CenterSite from './CenterSite/CenterSite';
import modal from "./Modal/modal.module.css"
import Icons from "../../assets/images/icons/Icons";
import { Icon } from "../../constants/PropsIcon";

const ProfilPage = () => {

    const { modaleActive, setModaleActive } = usePopUp()

    return (
        <div className={style.side}>

            <div>
                <LeftSide />
            </div>
            <div>
                <RightSide />

                <CenterSite />
            </div>
            <div className={style.modal}>
                <Modal active={modaleActive} setActive={setModaleActive} >
                    <span className={modal.name}>
                        User Name
                        <Icons pen={Icon.pen} />
                    </span>
                    <br />
                    <br />
                    <span className={modal.name}>
                        User Surname
                        <Icons pen={Icon.pen} />
                    </span>
                    <form>
                        <div>
                            <label className={modal.modLeb} htmlFor="id">Images</label><br />
                            <input className={modal.customFileInput} id="id" type="file" accept='.jpg, .png' />
                        </div>
                        <div><input className={modal.modInp} type="password" placeholder='Current password' /></div>
                        <div><input className={modal.modInp} type="password" placeholder='Edit password' /></div>
                        <div><input className={modal.modInp} type="password" placeholder='Repeat password' /></div>
                    </form>
                </Modal>
            </div>
        </div>
    );
};

export default ProfilPage;