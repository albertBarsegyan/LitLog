import { Link } from "react-router-dom";

const Icons = ({height, width,setting, friends, book, singOut, article, singIn, singUp }) => {
    return (
        <>
            <span>{singIn}</span>
            {singUp}
            {friends}
            {setting}
            {book}
            {singOut}
            {article}
        </>
    );
};

export default Icons;