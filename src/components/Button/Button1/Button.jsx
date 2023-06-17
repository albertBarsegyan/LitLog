import style from '../button.module.css'

const Button = ({
  children,
  onClick,
  styles,
  className,
  disable,
  type = 'button',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      style={styles}
      type={type}
      className={[style.editBtn, className ?? ''].join(' ')}
    >
      {children}
    </button>
  )
}

export default Button
