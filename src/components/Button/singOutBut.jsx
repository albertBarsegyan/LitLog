import { Link } from "react-router-dom";
import style from "./button.module.css"

const SingOutBut = () => {
    return (
        <Link className={style.outBtn}>
            Sign Out
        </Link>
    );
};

export default SingOutBut;