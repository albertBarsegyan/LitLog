import { Link, Route, Routes } from "react-router-dom";
import style from "./button.module.css"
// import LoginPage from "../LoginPage/LoginPage";
// import { RouteConstant } from "../../constants/RouteCostant";

const SingOutBut = () => {
    return (
        <>
            <Link className={style.outBtn}>
                Sign Out
            </Link>
            {/* <Routes>
                <Route path={RouteConstant.PrifilPage} element={<LoginPage />} />
            </Routes> */}
        </>
    );
};

export default SingOutBut;