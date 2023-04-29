import { useState, useEffect } from "react";
import style from "../Progress/progressBar.module.css"

const ProgressBar = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 20);
    };


    return (
        <div>

            <div className={style.progresDiv}>
                <progress className={style.progres} min={0} max={100} value={count}></progress> <br />
                <button onClick={handleClick}>Click me</button>
            </div>

        </div>
    );
};

export default ProgressBar;



