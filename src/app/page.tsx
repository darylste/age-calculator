'use client';

import Image from 'next/image';
import { FormEvent, useState } from 'react';
import cn from 'classnames';
import styles from './page.module.scss';

const Home = () => {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const [dayErrMsg, setDayErrMsg] = useState('');
  const [monthErrMsg, setMonthErrMsg] = useState('');
  const [yearErrMsg, setYearErrMsg] = useState('');

  const [daysPassed, setDaysPassed] = useState(0);
  const [monthsPassed, setMonthsPassed] = useState(0);
  const [yearsPassed, setYearsPassed] = useState(0);

  const isDateValid = (dateStr: string): boolean => {
    const date = new Date(dateStr);
    return !isNaN(date.getTime());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDayErrMsg('');
    setMonthErrMsg('');
    setYearErrMsg('');

    const isDate = isDateValid(`${year}-${month}-${day}`);
    if (!isDate) {
      setDayErrMsg('Must be a valid date');
    } else {
      const daysElapsed = Math.floor(
        (new Date().getTime() - new Date(`${year}-${month}-${day}`).getTime()) /
          (1000 * 3600 * 24),
      );
      setYearsPassed(Math.floor(daysElapsed / 365));
      setMonthsPassed(Math.floor((daysElapsed % 365) / 31));
      setDaysPassed(Math.floor((daysElapsed % 365) % 31) - 1);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.calc}>
          <form
            method='POST'
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <div className={styles.formInputBox}>
              <label
                htmlFor='day'
                className={cn(styles.formLabel, dayErrMsg ? styles.errMsg : '')}
              >
                Day
              </label>
              <input
                name='day'
                type='number'
                placeholder='DD'
                className={cn(
                  styles.formInput,
                  dayErrMsg ? styles.formInputErr : '',
                )}
                onChange={e => {
                  if (
                    e.target.valueAsNumber < 1 ||
                    e.target.valueAsNumber > 31
                  ) {
                    setDayErrMsg('Must be valid day');
                  } else {
                    setDayErrMsg('');
                  }
                  setDay(e.target.valueAsNumber);
                }}
              />
              <p
                id='dayErrMsg'
                className={styles.errMsg}
              >
                {dayErrMsg}
              </p>
            </div>

            <div className={styles.formInputBox}>
              <label
                htmlFor='month'
                className={cn(
                  styles.formLabel,
                  monthErrMsg ? styles.errMsg : '',
                )}
              >
                Month
              </label>
              <input
                name='month'
                type='number'
                placeholder='MM'
                className={cn(
                  styles.formInput,
                  monthErrMsg ? styles.formInputErr : '',
                )}
                onChange={e => {
                  if (
                    e.target.valueAsNumber < 1 ||
                    e.target.valueAsNumber > 12
                  ) {
                    setMonthErrMsg('Must be valid month');
                  } else {
                    setMonthErrMsg('');
                  }
                  setMonth(e.target.valueAsNumber);
                }}
              />
              <p
                id='monthErrMsg'
                className={`${styles.errMsg}`}
              >
                {monthErrMsg}
              </p>
            </div>

            <div className={styles.formInputBox}>
              <label
                htmlFor='year'
                className={cn(
                  styles.formLabel,
                  yearErrMsg ? styles.errMsg : '',
                )}
              >
                Year
              </label>
              <input
                name='Year'
                type='number'
                placeholder='YYYY'
                className={cn(
                  styles.formInput,
                  yearErrMsg ? styles.formInputErr : '',
                )}
                onChange={e => {
                  if (e.target.valueAsNumber > new Date().getFullYear()) {
                    setYearErrMsg('Must be in the past');
                  } else if (
                    e.target.valueAsNumber <
                    new Date().getFullYear() - 100
                  ) {
                    setYearErrMsg('Must be in the last 100 years');
                  } else {
                    setYearErrMsg('');
                  }
                  setYear(e.target.valueAsNumber);
                }}
              />
              <p
                id='yearErrMsg'
                className={`${styles.errMsg}`}
              >
                {yearErrMsg}
              </p>
            </div>
            <button
              type='submit'
              className={styles.formSubmitIconBg}
            >
              <Image
                className={styles.formIcon}
                src={'./icon-arrow.svg'}
                alt='arrow'
                width={44}
                height={44}
              />
            </button>
          </form>
          <h1 className={styles.heading}>
            <span className={styles.numYears}>
              {yearsPassed > 0 ? yearsPassed : '--'}
            </span>{' '}
            years <br />
            <span className={styles.numMonths}>
              {monthsPassed > 0 ? monthsPassed : '--'}
            </span>{' '}
            months <br />
            <span className={styles.numDays}>
              {daysPassed > 0 ? daysPassed : '--'}
            </span>{' '}
            days
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
