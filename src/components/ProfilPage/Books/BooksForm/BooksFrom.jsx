import { useForm } from 'react-hook-form'
import style from './booksform.module.css'
import { minMaxLengtMes, requeridMes } from '../../../../constants/errorMessage'
import { Icon } from '../../../../constants/PropsIcon'
import Icons from '../../../../assets/images/icons/Icons'

const BooksFrom = ({ openForm, setOpenForm }) => {
  const {
    register,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'all',
  })
  return (
    <div onClick={() => setOpenForm(!openForm)} className={style.bookFormDiv}>
      <form className={style.bookForm}>
        <p onClick={() => setOpenForm(!openForm)} className={style.xMark}>
          <Icons xmark={Icon.xmark} />
        </p>
        <div>
          <p>{errors?.bookName && <span>{errors?.bookName?.message}</span>}</p>
          <input
            {...register('bookName', {
              required: requeridMes.reqMes,
              maxLength: {
                value: 50,
                message: minMaxLengtMes.maxBookName,
              },
            })}
            className={style.inputBook}
            type="text"
            placeholder="Book Name"
          />
        </div>
        <div>
          <p>
            {errors?.authorName && <span>{errors?.authorName?.message}</span>}
          </p>
          <input
            {...register('authorName', {
              required: requeridMes.reqMes,
              maxLength: {
                value: 15,
                message: minMaxLengtMes.maxName,
              },
              minLength: {
                value: 3,
                message: minMaxLengtMes.minName,
              },
            })}
            className={style.inputBook}
            type="text"
            placeholder="Author Name"
          />
        </div>
        <div>
          <p>{errors?.genre && <span>{errors?.genre?.message}</span>}</p>
          <input
            {...register('genre', {
              required: requeridMes.reqMes,
              minLength: {
                value: 3,
                message: minMaxLengtMes.minName,
              },
            })}
            className={style.inputBook}
            type="text"
            placeholder="Genre"
          />
        </div>
        <div>
          <p>Add book photo</p>
          <input className={style.inputBook} type="file" />
        </div>
      </form>
    </div>
  )
}

export default BooksFrom
