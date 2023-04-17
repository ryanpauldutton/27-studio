import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] glassmorphism`}>
      <p className='font-bold text-[20px] text-white'>0{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-gray-100">{text}</p>
  </div>
);

export default StartSteps;
