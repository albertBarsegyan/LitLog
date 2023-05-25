import style from '../button.module.css'
const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={style.editBtn}>
      {children}
    </button>
  )
}

export default Button
