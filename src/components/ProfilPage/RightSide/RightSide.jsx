import Icons from "../../../assets/images/icons/Icons";
import { Icon } from "../../../constants/PropsIcon";
import { useAuth } from "../../../context/auth.context";
import style from "../RightSide/rightSide.module.css"
// import bkimg from "../../../assets/images/bkimg.jpg"

const RightSide = () => {

    const { user } = useAuth()
    return (
        <div className={style.rightDiv}>
            <div className={style.maxDiv}>
                <label className={style.labInp}>
                    <input className={style.inpSearch} type="text" />
                    <Icons search={Icon.search} />
                </label>
            </div>
            <div className={style.minDiv}>
                <Icons bell={Icon.bell} />
                <img className={style.userImg} src={user.photoURL} alt="" />
            </div>
        </div>
    );
};

export default RightSide;