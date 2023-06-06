import Icons from '../../../../assets/images/icons/Icons'
import Button from '../../../Button/Button1/Button'
import style from './articleform.module.css'
import { useForm } from 'react-hook-form'
import { minMaxLengtMes, requeridMes } from '../../../../constants/errorMessage'
import { Icon } from '../../../../constants/PropsIcon'
import { styling } from '../../../../constants/style'

const ArticleForm = ({ openForm, setOpenForm }) => {
  const {
    register,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    mode: 'all',
  })
  const isButtonDisable = !isDirty && !isValid

  const handleAddBookSubmit = (e) => {
    e.preventDefault()
    reset()
  }

  return (
    <div className={style.bookFormDiv}>
      <form onSubmit={handleAddBookSubmit} className={style.bookForm}>
        <p onClick={() => setOpenForm(!openForm)} className={style.xMark}>
          <Icons xmark={Icon.xmark} />
        </p>
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

        <Button disable={isButtonDisable} styles={styling}>
          Save
        </Button>
      </form>
    </div>
  )
}

export default ArticleForm
