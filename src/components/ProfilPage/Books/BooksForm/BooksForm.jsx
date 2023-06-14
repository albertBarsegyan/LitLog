import Icons from '../../../../assets/images/icons/Icons'
import Button from '../../../Button/Button1/Button'
import style from './booksform.module.css'
import { Controller, useForm } from 'react-hook-form'
import { minMaxLengtMes, requeridMes } from '../../../../constants/errorMessage'
import { Icon } from '../../../../constants/PropsIcon'
import { styling } from '../../../../constants/style'
import { useAuth } from '../../../../context/auth.context'
import { addBook, editBook } from '../../../../services/book.services'

const defaultValues = {
  headline: '',
  author: '',
  url: '',
  genre: 'Classics',
  readingStatus: 'reading',
}

const BookGenresList = [
  { value: 'Action and Adventure', id: 0 },
  { value: 'Biography', id: 1 },
  { value: 'Children', id: 2 },
  { value: 'Classics', id: 3 },
  { value: 'Comic and Graphic Novel', id: 4 },
  { value: 'Crime and Detective', id: 5 },
  { value: 'Drama', id: 6 },
  { value: 'Fantasy', id: 7 },
  { value: 'Historical Fiction', id: 8 },
  { value: 'Horror', id: 9 },
  { value: 'Humor', id: 10 },
  { value: 'Mystery', id: 11 },
  { value: 'Romance', id: 12 },
  { value: 'Science Fiction', id: 13 },
  { value: 'Self-Help and Personal Development', id: 14 },
  { value: 'Suspense and Thriller', id: 15 },
  { value: 'Travel', id: 16 },
]

const BooksForm = ({ openForm, setOpenForm, providedDefaultValues }) => {
  const { user } = useAuth()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    mode: 'all',
    defaultValues: providedDefaultValues ?? defaultValues,
  })

  const isButtonDisable = !isDirty && !isValid

  const handleBookSubmit = async (data) => {
    if (providedDefaultValues) {
      const { errorCode } = await editBook(data)
      if (!errorCode) setOpenForm(false)
      return
    }

    const { errorCode } = await addBook(data, user?.uid)

    if (!errorCode) setOpenForm(false)

    reset()
  }

  return (
    <div className={style.bookFormDiv}>
      <form
        onSubmit={handleSubmit(handleBookSubmit)}
        className={style.bookForm}
      >
        <p onClick={() => setOpenForm(!openForm)} className={style.xMark}>
          <Icons xmark={Icon.xmark} />
        </p>
        <div>
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
          <p>{errors?.bookName && <span>{errors?.bookName?.message}</span>}</p>
        </div>
        <div>
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

          <p>
            {errors?.authorName && <span>{errors?.authorName?.message}</span>}
          </p>
        </div>

        <div>
          <input
            {...register('url', {
              required: requeridMes.reqMes,
            })}
            className={style.inputBook}
            type="text"
            placeholder="Add url"
          />
          <p>{errors?.url && <span>{errors?.url?.message}</span>}</p>
        </div>

        <div className={style.selectWrapper}>
          <label htmlFor="genre">Select genre</label>

          <Controller
            name="genre"
            control={control}
            defaultValue="Classics" // Set the initial value here if needed
            render={({ field }) => (
              <select {...field} id="genre" className={style.select}>
                {BookGenresList.map((genre) => (
                  <option key={genre.id} value={genre.value}>
                    {genre.value}
                  </option>
                ))}
              </select>
            )}
          />
        </div>

        <div className={style.selectWrapper}>
          <label htmlFor="readingStatus">Select reading status</label>

          <Controller
            name="readingStatus"
            control={control}
            defaultValue="reading" // Set the initial value here if needed
            render={({ field }) => (
              <select {...field} id="readingStatus" className={style.select}>
                <option value="reading">Reading</option>
                <option value="finished">Finished</option>
                <option value="wantToRead">Want to read</option>
              </select>
            )}
          />
        </div>

        <Button type="submit" disable={isButtonDisable} styles={styling}>
          {providedDefaultValues ? 'Edit' : 'Create'} book
        </Button>
      </form>
    </div>
  )
}

export default BooksForm
