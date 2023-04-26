import style from './leftSide.module.css'
import { Link, NavLink } from "react-router-dom";
import Icons from "../../../assets/images/icons/Icons";

const LeftSide = () => {
    return (
        <div>
            <div className={style.header}>
                <NavLink className={style.logo}>LitLog</NavLink>
            </div>

            <nav className={style.menu}>
                <Link className={style.link}>
                    Dashboard
                </Link>
                <Link className={style.link}>  My Collection</Link>
                <Link className={style.link}>  Favorites</Link>
            </nav>

            <div className={style.setings}>
                <NavLink> settings </NavLink>
                <Link> Log Out </Link>
            </div>
        </div>
    );
};

export default LeftSide;