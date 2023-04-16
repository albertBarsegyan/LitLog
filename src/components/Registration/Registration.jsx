import style from "./registration.module.css"
import RegistrationDesc from "./RegistrationDesc/RegistrationDesc"
import RegistrationForm from "./RegistrationForm/RegistrationForm"

export function Registration() {

    return (
        <div className={style.main}>
            <RegistrationDesc />
            <RegistrationForm />
        </div >

    )
}
