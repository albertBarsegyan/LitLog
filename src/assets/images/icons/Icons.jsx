import { Link } from "react-router-dom";

const Icons = ({ setting, friends, book, singOut, article, singIn, singUp, search, bell, pen }) => {
    return (
        <>
            {singIn}
            {singUp}
            {friends}
            {setting}
            {book}
            {singOut}
            {article}
            {search}
            {bell}
            {pen}
        </>
    );
};

export default Icons;