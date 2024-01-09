import React from 'react';
import styles from './Calculator.module.scss';
import Image from 'next/image';

const Calculator = () => {
  return (
    <div className={styles.calc}>
      <form className={styles.form}>
        <div className={styles.formInputBox}>
          <label
            htmlFor='day'
            className={styles.formLabel}
          >
            Day
          </label>
          <input
            name='day'
            type='number'
            placeholder='DD'
            min={1}
            max={31}
            className={styles.formInput}
          />
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
        </div>
        <div className={styles.formSubmitIconBg}>
          <Image
            className={styles.formIcon}
            src={'./icon-arrow.svg'}
            alt=''
            width={44}
            height={44}
          ></Image>
        </div>
      </form>
      {/* new component */}
      <h1 className={styles.heading}>
        <span className={styles.numYears}>--</span> years <br />
        <span className={styles.numMonths}>--</span> months <br />
        <span className={styles.numDays}>--</span> days
      </h1>
    </div>
  );
};

export default Calculator;
