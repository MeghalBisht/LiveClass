import React from 'react';
import styles from '../../CompStyles/UtilitiesStyle/quizQuestion.module.css';
import Answers from '../Utilities/Answers'
function QuizQuestion({ props, myAns }) {

    

    return (
        <div className={styles.questionWrapper}>
            <p className={styles.questionNumber}>Question {props.id}</p>
            <p className={styles.questionContent}>{props.question}</p>

            <div className={styles.questionOptions}>

                <Answers props={props} myAns={myAns} />


            </div>

        </div>
    )

}

export default QuizQuestion
