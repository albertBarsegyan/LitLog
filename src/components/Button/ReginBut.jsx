import { Link } from 'react-router-dom'
import { RouteConstant } from '../../constants/RouteCostant'
import style from './button.module.css'

function RegIn() {
  return (
    <Link className={style.fBtn} to={RouteConstant.RegPage}>
      Sign Up
    </Link>
  )
}

export default RegIn
