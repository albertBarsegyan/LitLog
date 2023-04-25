import style from './LeftSide.module.css'
import logo from '../../assets/images/logo.jpg'
import Vector from '../../assets/images/Vector.png'
import save from '../../assets/images/save.png'
import collection from '../../assets/images/collection.png'
import settings from '../../assets/images/settings.png'
import logout from '../../assets/images/logout.png'
import { Link, NavLink } from "react-router-dom";
import Icons from "../../assets/Icons/icons";

const LeftSide = () => {
    return (
        <div>
            <div className={style.leftSide}>
                <div>
                    <img className={style.logo} src={logo} alt="" />
                </div>
                <div className={style.navbar}>
                    <nav className={style.menu}>
                        <Link className={style.link}>
                            <img
                                className={style.icons}
                                src={Vector} alt="" />
                            <Icons article={PropsConst.article} />
                            Dashboard
                        </Link>
                        <Link className={style.link}><img className={style.icons} src={save} alt="" />  My Collection</Link>
                        <Link className={style.link}><img className={style.icons} src={collection} alt="" />  Favorites</Link>
                    </nav>
                </div>
                <div className={style.setings}>
                    <NavLink> <img className={style.icons} src={settings} alt="" /> settings </NavLink> <br /><br />
                    <Link> <img className={style.icons} src={logout} alt="" /> Log Out => </Link>
                </div>
            </div>

        </div>
    );
};

export default LeftSide;