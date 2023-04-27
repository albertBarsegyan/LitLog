import Icons from "../../../assets/images/icons/Icons";
import { Icon } from "../../../constants/PropsIcon";
import style from "./rightSide.module.css"

const RightSide = () => {
    return (
        <div className={style.sideBar}>
            <div>
                <label className={style.labSt}>
                    <input className={style.inpSearch} />
                    <Icons search={Icon.search} />
                </label>

            </div>
            <div>
                <Icons bell={Icon.bell} />
            </div>
        </div>
    );
};

export default RightSide;