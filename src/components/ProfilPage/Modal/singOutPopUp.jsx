import popMod from "./modal.module.css"

const SingOutPopUp = ({ active, setActive, children }) => {
    return (
        <div className={active ? `${popMod.modalee} ${popMod.active}` : popMod.modalee} onClick={() => setActive(false)}>
            <div className={active ? `${popMod.modalee__content} ${popMod.active}` : popMod.modalee__content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default SingOutPopUp;