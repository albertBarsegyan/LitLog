import style from "./profil.module.css"
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';



const ProfilPage = () => {
    return (
        <div className={style.side}>
            <div>
                <LeftSide />
            </div>
            <div>
                <RightSide/>
            </div>
        </div>
    );
};

export default ProfilPage;