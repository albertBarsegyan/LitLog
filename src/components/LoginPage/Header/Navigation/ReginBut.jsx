import { useNavigate } from "react-router-dom";
import style from "./reginBut.module.css"

const ReginBut = () => {

    const navigation = useNavigate()

    return <button className={style.regin}>Sing Up <i class="fa-solid fa-user-plus"></i></button>
};

export default ReginBut;