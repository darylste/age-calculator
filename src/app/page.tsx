import Image from 'next/image';
import styles from './page.module.scss';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.calc}>
          <form className={styles.form}>
            <div className={styles.formInputBox}>
              <label
                htmlFor='day'
                className={`${styles.formLabel} ${styles.errMsg}`}
              >
                Day
              </label>
              <input
                name='day'
                type='number'
                placeholder='DD'
                min={1}
                max={31}
                className={`${styles.formInput} ${styles.formInputError}`}
              />
              <p
                id='dayErrMsg'
                className={styles.errMsg}
              >
                Must be a valid day
              </p>
            </div>

            <div className={styles.formInputBox}>
              <label
                htmlFor='month'
                className={styles.formLabel}
              >
                Month
              </label>
              <input
                name='month'
                type='number'
                placeholder='MM'
                min={1}
                max={12}
                className={styles.formInput}
              />
              <p
                id='monthErrMsg'
                className={`${styles.errMsg} ${styles.hidden}`}
              >
                Must be a valid month
              </p>
            </div>

            <div className={styles.formInputBox}>
              <label
                htmlFor='year'
                className={styles.formLabel}
              >
                Year
              </label>
              <input
                name='Year'
                type='number'
                placeholder='YYYY'
                min={1900}
                max={2024}
                className={styles.formInput}
              />
              <p
                id='yearErrMsg'
                className={`${styles.errMsg} ${styles.hidden}`}
              >
                Must be in the past
              </p>
            </div>
            <div className={styles.formSubmitIconBg}>
              <Image
                className={styles.formIcon}
                src={'./icon-arrow.svg'}
                alt='arrow'
                width={44}
                height={44}
              />
            </div>
          </form>
          <h1 className={styles.heading}>
            <span className={styles.numYears}>--</span> years <br />
            <span className={styles.numMonths}>--</span> months <br />
            <span className={styles.numDays}>--</span> days
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
