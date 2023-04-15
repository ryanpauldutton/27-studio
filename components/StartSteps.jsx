import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-gray-200`}>
      <p>{number}</p>
    </div>
    <p className="px-4 text-white">{text}</p>
  </div>
);

export default StartSteps;
