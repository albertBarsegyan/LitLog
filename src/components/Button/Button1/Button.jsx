import style from '../button.module.css'
const Button = ({ children, onClick, styles }) => {
  return (
    <button onClick={onClick} style={styles} className={style.editBtn}>
      {children}
    </button>
  )
}

export default Button
