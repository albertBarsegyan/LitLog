import { Link } from "react-router-dom";

const Icons = ({setting, friends, book, singOut, article, singIn, singUp}) => {
    return (
        <>
            {singIn}
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