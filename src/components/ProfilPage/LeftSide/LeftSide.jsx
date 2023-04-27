import style from './leftSide.module.css'
import { Link } from "react-router-dom";
import Icons from "../../../assets/images/icons/Icons";
import { Icon } from '../../../constants/PropsIcon';

const LeftSide = () => {
    return (
        <div className={style.leftSide}>
            <div className={style.header}>
                <Link className={style.logo}>LitLog</Link>
            </div>
            <nav className={style.menu}>
                <Link className={style.link}>
                    <Icons book={Icon.book} />
                    <span className={style.text}>
                        Book
                    </span>
                </Link>
                <Link className={style.link}>
                    <Icons article={Icon.article} />
                    <span className={style.text}>
                        Article
                    </span>
                </Link>
                <Link className={style.link}>
                    <Icons friends={Icon.friends} />
                    <span className={style.text}>
                        Friends
                    </span>
                </Link>
            </nav>
            <div className={style.setings}>
                <Link className={style.link}>
                    <Icons setting={Icon.setting} />
                    <span className={style.text}>
                        Settings
                    </span>
                </Link>

                <Link className={style.link}>
                    <Icons singOut={Icon.singOut} />
                    <span className={style.text}>
                        Log Out
                    </span>
                </Link>
            </div>

        </div>


    );
};

export default LeftSide;