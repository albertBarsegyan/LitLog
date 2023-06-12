import style from '../../EditProfile/EditProfile.module.css'

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? `${style.modale} ${style.active}` : style.modale}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? `${style.modale__content} ${active}` : style.modale__content
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
