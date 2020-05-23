import React, { useEffect, useState } from "react";
import styles from '../../CompStyles/assignmentCard.module.css';

function AssignmentTimer(props) {


  const calculateTimeLeft = () => {
    const difference = +new Date(props.lastDateToSubmit) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Mins: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {" "}
      </span>
    );
  });

  return (
    <div>
      {
        timerComponents.length ?
          <div className={styles.assignmentTimer}>
            <p><span>{timerComponents[0]}</span><span className={styles.subHead}>Days</span></p>
            <p><span>{timerComponents[1]}</span><span className={styles.subHead}>Hours</span></p>
            <p><span>{timerComponents[2]}</span><span className={styles.subHead}>Mins</span></p>
          </div>
          :
          <span className={styles.timeUp}>submission closed!</span>
      }
    </div>
  );
}

export default AssignmentTimer