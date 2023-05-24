import { Link } from 'react-router-dom'
import styles from '../button.module.css'

const HeaderButton = ({ children, rout, color }) => {
  return (
    <Link className={styles.fBtn} style={color} to={rout}>
      {children}
    </Link>
  )
}

export default HeaderButton
