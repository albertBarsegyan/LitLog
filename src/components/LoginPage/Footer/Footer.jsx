import { NavLink } from "react-router-dom";
import { RouterConst } from "../../../constants/RouterConstant";
import style from "./footer.module.css"

const Footer = () => {
    return (
        <footer>
            <p>&copy; All Rights Reserved from K.A.S.A. </p>
            <div>
                <NavLink className={style.link} to={RouterConst.RegPage}>Sing Up</NavLink>
            </div>
        </footer>
    );
};

export default Footer;