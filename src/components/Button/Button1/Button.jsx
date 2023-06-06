import style from '../button.module.css'
const Button = ({ children, onClick, styles, disable }) => {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      style={styles}
      className={style.editBtn}
    >
      {children}
    </button>
  )
}

export default Button
