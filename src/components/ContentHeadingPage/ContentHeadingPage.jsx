import style from './headingPage.module.css'

function HeadingPage() {
  return (
    <div className={style.wrapper}>
      <div className={style.imgBack}>
        <div className={style.content}>
          <h1>
            Lit
            <span className={style.contentH1}>Log</span>
          </h1>
          <p>
            Are you dreaming of reading books but don't want <br />
            to spend time going to the library or waiting for delivery? <br />
            Then our website is for you! Here you will find a wide selection{' '}
            <br />
            of literature - from novels to scientific works. Our books are{' '}
            <br />
            available online, and you can start reading right away. <br />
            Our library is constantly updated with new books, <br />
            so you will always find something interesting for yourself. <br />
            Join our online library today!
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeadingPage
