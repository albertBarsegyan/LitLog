import { useState } from "react";
import style from "./book.module.css";
import { Link } from "react-router-dom";

const RegEx = /^\d*$/


const BookCount = () => {

    const [number, setNumber] = useState("")

    const handleChange = e => {
        const value = e.target.value
        if (RegEx.test(value) && value <= 365 && value >= 1) {
            setNumber(value)
        }
    }

    return (
        <div>
            <h1 className={style.wHead}> Welcome LitLog</h1>
            <div className={style.parDiv}>
                <p className={style.content}>
                    Welcome to LitLog, the online platform for all things literature!

                    Here, you'll find a wealth of resources to help you deepen your
                    understanding and appreciation of books, authors, and literary 
                    works from around the world. Whether you're a student, a researcher,
                    or simply a lover of literature, LitLog is the perfect place for you 
                    to explore and engage with the world of words.
                </p>
                <label>
                    <p className={style.lebPar}> <span className={style.lebSpan}>E</span>nter quantity to read books</p>
                    <input
                        className={style.inpNum}
                        placeholder="book count"
                        value={number}
                        onChange={handleChange}
                    />
                </label>
                <Link className={style.btnN}>Next</Link>
            </div>
        </div>
    );
};

export default BookCount;
