import style from "./profil.module.css"
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
// import Modal from "./Modal/Modal";
// import { usePopUp } from "../../context/popup";
import CenterSite from './CenterSite/CenterSite';


const ProfilPage = () => {

<<<<<<< HEAD
    // const [modaleActive, setModaleActive] = usePopUp()
=======
    const { modaleActive, setModaleActive } = usePopUp()
>>>>>>> 765870d6c541c73d749a585ecfb55bfdf9c71715

    return (
        <div className={style.side}>

            <div>
                <LeftSide />
            </div>
            <div>
                <RightSide />

                <CenterSite />
            </div>
<<<<<<< HEAD
            {/* <Modal active={modaleActive} setActive={setModaleActive} >
                <span>Name</span>
                <span>Surname</span>
                <form>
                    <input type="file" placeholder='Images' />
                    <input type="password" placeholder='Current password' />
                    <input type="password" placeholder='Edit password' />
                    <input type="password" placeholder='Repeat password' />
                </form>
            </Modal> */}
=======
            {/* <div className={style.modal}> */}
            <Modal active={modaleActive} setActive={setModaleActive} />
            {/* <span className={style.name}>User Name</span>
                    <span className={style.name}>User Surname</span>
                    <form>
                        <input type="file" placeholder='Images' />
                        <input type="password" placeholder='Current password' />
                        <input type="password" placeholder='Edit password' />
                        <input type="password" placeholder='Repeat password' />
                    </form>  */}
            {/* </Modal> */}
            {/* </div> */}
>>>>>>> 765870d6c541c73d749a585ecfb55bfdf9c71715
        </div>
    );
};

export default ProfilPage;