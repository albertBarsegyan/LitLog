import ReginBut from "./Navigation/ReginBut";
import logo from "./images/logo.jpg"
import style from "./header.module.css"
const Header = () => {
    return (
        <header>
            <div className={style.logoDiv}>
                <img src={logo} className={style.logo} alt="" />
            </div>
            <div>
                <ReginBut/>
            </div>
        </header>
    );
};

export default Header;