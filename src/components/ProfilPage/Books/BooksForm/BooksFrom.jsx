import Icons from '../../../../assets/images/icons/Icons'
import Button from '../../../Button/Button1/Button'
import style from './booksform.module.css'
import { useForm } from 'react-hook-form'
import { minMaxLengtMes, requeridMes } from '../../../../constants/errorMessage'
import { Icon } from '../../../../constants/PropsIcon'
import { styling } from '../../../../constants/style'
import { addBook } from '../../../../services/book.services'
import { useAuth } from '../../../../context/auth.context'

const defaultValues = {
  headline: '',
  author: '',
  genre: '',
  url: '',
}

const BooksFrom = ({ openForm, setOpenForm }) => {
  const { user } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    mode: 'all',
    defaultValues,
  })

  const isButtonDisable = !isDirty && !isValid

  const handleAddBookSubmit = async (data) => {
    const { errorCode } = await addBook(data, user?.uid)
    console.log({ errorCode })

    reset()
  }

  return (
    <div className={style.bookFormDiv}>
      <form
        onSubmit={handleSubmit(handleAddBookSubmit)}
        className={style.bookForm}
      >
        <p onClick={() => setOpenForm(!openForm)} className={style.xMark}>
          <Icons xmark={Icon.xmark} />
        </p>
        <div>
          <p>{errors?.bookName && <span>{errors?.bookName?.message}</span>}</p>
          <input
            {...register('headline', {
              required: requeridMes.reqMes,
              maxLength: {
                value: 50,
                message: minMaxLengtMes.maxBookName,
              },
            })}
            className={style.inputBook}
            type="text"
            placeholder="Headline"
          />
        </div>
        <div>
          <p>
            {errors?.authorName && <span>{errors?.authorName?.message}</span>}
          </p>
          <input
            {...register('author', {
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
          <p>{errors?.url && <span>{errors?.url?.message}</span>}</p>
          <input
            {...register('url', {
              required: requeridMes.reqMes,
            })}
            className={style.inputBook}
            type="text"
            placeholder="Add url"
          />
        </div>

        <Button type={'submit'} disable={isButtonDisable} styles={styling}>
          Create book
        </Button>
      </form>
    </div>
  )
}

export default BooksFrom
