import { Link } from "react-router-dom";
import style from "./footer.module.css"
import { RouteConstant } from "../../../constants/RouteCostant";

const Footer = () => {
    return (
        <footer>
            <p>&copy; All Rights Reserved from K.A.S.A. </p>
            <div>
                <Link className={style.link} to={{
                    pathname: RouteConstant.RegPage
                }}>Sing Up</Link>
            </div>
        </footer>
    );
};

export default Footer;