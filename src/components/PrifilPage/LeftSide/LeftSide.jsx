import style from './leftSide.module.css'
import { Link, NavLink } from "react-router-dom";
const LeftSide = () => {

    return (
        <div>
            <div className={style.leftSide}>
                <div>
                    <NavLink className={style.logo}>LITLOG</NavLink>
                </div>
                <div className={style.navbar}>
                    <nav className={style.menu}>
                        <Link className={style.link}>
                            <img
                                className={style.icons}
                                src="" alt="" />
                            Dashboard
                        </Link>
                        <Link className={style.link}><img className={style.icons} src="" alt="" />  My Collection</Link>
                        <Link className={style.link}><img className={style.icons} src="" alt="" />  Favorites</Link>
                    </nav>
                </div>
                <div className={style.setings}>
                    <Link> <img className={style.icons} src="" alt="" /> settings </Link>
                    <Link> <img className={style.icons} src="" alt="" /> Log Out</Link>
                </div>
            </div>

        </div>
    );
};

export default LeftSide;