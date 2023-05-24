import './footer.module.css'
import { RouteConstant } from '../../../constants/RouteCostant'
import HeaderButton from '../../Button/Button2/HeaderButton'

const Footer = () => {
  // const st = {
  //   color: 'white',
  // }
  return (
    <footer>
      <p>&copy; All Rights Reserved from K.A.S.A. </p>
      <div>
        <HeaderButton color={{ color: 'white' }} rout={RouteConstant.RegPage}>
          Sign Up
        </HeaderButton>
      </div>
    </footer>
  )
}

export default Footer
