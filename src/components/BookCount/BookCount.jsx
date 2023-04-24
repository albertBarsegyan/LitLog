import { useState } from "react";
import style from "./book.module.css";
import { Link } from "react-router-dom";

const RegEx = /^\d*$/


const BookCount = () => {

    const [number, setNumber] = useState("")

    const handleChange = e => {
        const value = e.target.value
        if (RegEx.test(value)) {
            setNumber(value)
        }

    }

    return (
        <div>
            <h1 className={style.wHead}> Welcome LitLog</h1>
            <div className={style.parDiv}>
                <p className={style.content}>
                    Welcome to our website! We are delighted to have you here. Our site is
                    designed to provide you with a seamless and enjoyable experience,
                    whether you're here to shop, learn, or simply browse. We pride
                    ourselves on offering a wide range of high-quality products and
                    services that cater to your every need. From cutting-edge technology
                    to stylish fashion, we have something for everyone. We believe that
                    every visitor to our site deserves the very best, and we are committed
                    to delivering excellence in every aspect of our business. Thank you
                    for choosing to visit us, and we hope you have a wonderful time
                    exploring all that our site has to offer!
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
