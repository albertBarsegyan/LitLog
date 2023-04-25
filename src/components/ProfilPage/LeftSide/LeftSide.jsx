import style from './LeftSide.module.css'
import { Link, NavLink } from "react-router-dom";
import Icons from "../../assets/Icons/icons";

const LeftSide = () => {
    return (
        <div>
            <div className={style.leftSide}>
                <div>
                    <NavLink></NavLink>
                </div>
                <div className={style.navbar}>
                    <nav className={style.menu}>
                        <Link className={style.link}>
                            <img
                                className={style.icons}
                                src={Vector} alt="" />
                            Dashboard
                        </Link>
                        <Link className={style.link}>  My Collection</Link>
                        <Link className={style.link}>  Favorites</Link>
                    </nav>
                </div>
                <div className={style.setings}>
                    <NavLink> settings </NavLink> 
                    <Link> Log Out </Link>
                </div>
            </div>

        </div>
    );
};

export default LeftSide;