import style from "./bookshow.module.css";
import bookName from "../../../constants/bookName";
import { Link } from "react-router-dom";

const BookShow = () => {
    return (
        <div className={style.bookShowMain}>
            <h2 className={style.bookShow}>Top Rated Comics</h2>

            <div className={style.books}>

                {
                    bookName.map((item) => {
                        return (
                            <div key={item.id}>
                                <img className={style.img} src={item.img} alt="img" />
                                <Link className={style.name}>{item.name}</Link>
                                <p className={style.paragrap}>{item.desc}</p>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    );
};

export default BookShow;