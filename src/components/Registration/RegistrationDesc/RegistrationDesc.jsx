import style from './registrationDesc.module.css'

const RegistrationDesc = () => {
  return (
    <div className={style.miniMainDiv}>
      <h1 className={style.heading}>LitLog registration page</h1>
      <div className={style.textBox}>
        <p className={style.desc}>
          Welcome to our book reading website! <br />
          We're glad to have you and help you find your next read. <br />
          Our website offers a wide selection of books <br />
          across various genres - from classics to new releases.
        </p>
        <p className={style.desc}>
          Reading books on our website is simple and convenient. <br />
          You can choose the genre that interests you and find books that suit
          your taste. <br />
          We also offer book recommendations based on your preferences.
        </p>
        <p className={style.desc}>
          Registering on our website will allow you to save your favorite books,{' '}
          <br />
          mark those you've read, rate and review them. You'll also be able to
          join <br />
          our community of book lovers and discuss books with other users on our
          website.
        </p>
        <p className={style.desc}>
          We strive to provide you with the best book reading experience, <br />
          so we're constantly updating our collection, adding new books, <br />
          and improving the functionality of our website. <br />
          We hope that our website will allow you to <br />
          enjoy reading and discover new favorite books!
        </p>
      </div>
    </div>
  )
}

export default RegistrationDesc
