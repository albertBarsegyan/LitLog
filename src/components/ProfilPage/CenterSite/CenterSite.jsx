import { Link } from "react-router-dom";
import batman from "../../../assets/images/batman.png"
import bookimg2 from "../../../assets/images/bookimg2.png"
import style from "../CenterSite/centerSite.module.css"
const CenterSite = () => {
    return (
        <div className={style.centerDiv}>
            <div class={style.imageContainer} >
                <img className={style.bookImg} src={batman} alt="" />
                <div class={style.imageText}>
                    <h2 className={style.heading}>Frank Miller</h2>
                    <p className={style.paragrath}>Batman: <br /> The Dark Knight</p>
                </div>
                <div className={style.butRead}>
                    <Link className={style.readNow}>Raed Now</Link>
                </div>
            </div>

            <div>
                <h2>Continue Reading</h2>
                <div>
                    <img src={bookimg2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CenterSite;