import style from './leftSide.module.css'
import { Link, NavLink } from "react-router-dom";


const LeftSide = () => {
    return (
        <div>
            <div className={style.leftSide}>
                <NavLink className={style.logo}><span className={style.lspan}>L</span>it<span className={style.lspan}>L</span>og</NavLink>
                <div>
                   
                </div>
                <div className={style.navbar}>
                    <nav className={style.menu}>
                        <Link className={style.link}>
                            
                        </Link>
                        <Link className={style.link}>  My Collection</Link>
                        <Link className={style.link}>  Favorites</Link>
                    </nav>
                </div>
                <div className={style.setings}>
                    <NavLink>  settings </NavLink> <br /><br />
                    <Link>  Log Out  </Link>
                </div>
            </div>

        </div>
    );
};

export default LeftSide