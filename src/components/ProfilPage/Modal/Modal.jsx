import style from "./modal.module.css"


const Modal = ({ active, setActive, children }) => {
    return (
        <div className={active ? `${style.modale} ${style.active}` : style.modale} onClick={() => setActive(false)}>
            <div className={active ? `${style.modale__content} ${active}` : style.modale__content} onClick={e => e.stopPropagation()}>
                {children}
                <span className={style.name}>User Name </span>
                <span className={style.name}>User Surname </span>
                <form>
                    <input type="file" placeholder='Images' /><br />
                    <input type="password" placeholder='Current password' /><br />
                    <input type="password" placeholder='Edit password' /><br />
                    <input type="password" placeholder='Repeat password' />
                </form>
            </div>
        </div>
    );
};

export default Modal;