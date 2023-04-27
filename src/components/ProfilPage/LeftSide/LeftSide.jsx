import style from './leftSide.module.css'
import { NavLink, Link } from "react-router-dom";
import Icons from "../../../assets/images/icons/Icons";
import { Icon } from '../../../constants/PropsIcon';
import { RouteConstant } from '../../../constants/RouteCostant';
import Modal from '../Modal/Modal';
import { useState } from 'react';



const LeftSide = () => {
    const [modaleActive, setModaleActive] = useState(false)
    return (
        <div className={style.leftSide}>

            <div className={style.header}>
                <Link className={style.logo}>LitLog</Link>
            </div>
            <nav className={style.menu}>

                <NavLink to={RouteConstant.BookPage}
                    className={({ isActive }) =>
                        isActive ? style.activeLink : style.link
                    }>
                    <Icons book={Icon.book} />

                    <span className={style.text}>
                        Book
                    </span>

                </NavLink>

                <NavLink to={RouteConstant.ArticlePage}
                    className={({ isActive }) =>
                        isActive ? style.activeLink : style.link
                    }>
                    <Icons article={Icon.article} />

                    <span className={style.text}>
                        Article
                    </span>

                </NavLink>

                <NavLink to={RouteConstant.FriendPage}
                    className={({ isActive }) =>
                        isActive ? style.activeLink : style.link
                    }>

                    <Icons friends={Icon.friends} />

                    <span className={style.text}>
                        Friends
                    </span>

                </NavLink>
            </nav>
            <div className={style.setings}>

                <NavLink

                    onClick={() => setModaleActive(true)}
                    
                    className={style.link}>
                    <Icons setting={Icon.setting} />
                    <span className={style.text}>
                        Settings
                    </span>
                </NavLink>

                <Link className={style.link}>
                    <Icons singOut={Icon.singOut} />
                    <span className={style.text}>
                        Log Out
                    </span>
                </Link>
            </div>
            <Modal active={modaleActive} setActive={setModaleActive} >
                <span>Name</span>
                <span>Surname</span>
                <form>
                    <input type="file" placeholder='Images' />
                    <input type="password" placeholder='Current password' />
                    <input type="password" placeholder='Edit password' />
                    <input type="password" placeholder='Repeat password' />
                </form>
            </Modal>
        </div>


    );
};

export default LeftSide