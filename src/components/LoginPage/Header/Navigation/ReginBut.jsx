// import { useNavigate } from "react-router-dom";
// import style from "./reginBut.module.css"
// import { RouterConstant } from "../../../../constants/RouterConstant"
// const ReginBut = () => {

//     const navigation = useNavigate()

//     return <button className={style.regin} onClick={() => navigation(RouterConstant.RegPage)} >Sing Up <i class="fa-solid fa-user-plus"></i></button>
// };

// export default ReginBut;
import { useNavigate } from "react-router-dom";
import style from "./reginBut.module.css"
import { RouterConst } from "../../../../constants/RouterConstant"

const ReginBut = () => {

    const navigation = useNavigate()

    return <button onClick={() => navigation(RouterConst.RegPage)} className={style.regin}>Sing Up <i class="fa-solid fa-user-plus"></i></button>
};

export default ReginBut;