import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import style from './registration.module.css'
import RegistrationDesc from './RegistrationDesc/RegistrationDesc'
import RegistrationForm from './RegistrationForm/RegistrationForm'

export function Registration() {
  return (
    <div>
      <Header />
      <div className={style.main}>
        <RegistrationDesc />
        <RegistrationForm />
      </div>
      <Footer />
    </div>
  )
}
