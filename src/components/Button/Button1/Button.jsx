import style from '../button.module.css'

const Button = ({ children, onClick, styles, disable, type = 'button' }) => {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      style={styles}
      type={type}
      className={style.editBtn}
    >
      {children}
    </button>
  )
}

export default Button
