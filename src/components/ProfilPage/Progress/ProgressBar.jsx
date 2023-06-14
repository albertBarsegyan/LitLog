import styles from './progressBar.module.css'

export const getReadPercent = (readBooksCount, booksCount) =>
  ((readBooksCount / booksCount) * 100).toFixed(2)

export default function ProgressBar({ booksCount = 1, readBooksCount = 0 }) {
  const readBooksPercent = getReadPercent(readBooksCount, booksCount)

  return (
    <div className={styles.progressbarWrapper}>
      <div style={{ width: '50%' }}>
        <div className={styles.percentWrapper}>
          <span>{readBooksPercent}%</span>
        </div>
        <div className={styles.indicator}>
          <div style={{ width: `${readBooksPercent}%` }}></div>
        </div>

        <div style={{ marginTop: '24px', color: 'white' }}>
          <p>
            In {new Date().getFullYear()} must read {booksCount} books
          </p>
        </div>
      </div>
    </div>
  )
}
