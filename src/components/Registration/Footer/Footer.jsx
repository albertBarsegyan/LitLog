import { Link } from 'react-router-dom'
import style from './footer.module.css'
import { RouteConstant } from '../../../constants/RouteCostant'
import HeaderButton from '../../Button/Button2/HeaderButton'

const Footer = () => {
  return (
    <footer>
      <p>&copy; All Rights Reserved from K.A.S.A. </p>
      <div>
        <HeaderButton color={{ color: 'white' }} rout={RouteConstant.LoginPage}>
          Sign In
        </HeaderButton>
      </div>
    </footer>
  )
}

export default Footer
