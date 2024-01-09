import styles from './page.module.css';
import Calculator from '@/Components/Organisms/Calculator/Calculator.component';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Calculator />
      </div>
    </main>
  );
};

export default Home;
