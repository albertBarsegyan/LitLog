import { Link } from "react-router-dom";

const Icons = ({setting, friends, book, singOut, article}) => {
    return (
        <>
            {friends}
            {setting}
            {book}
            {singOut}
            {article}
        </>
    );
};

export default Icons;