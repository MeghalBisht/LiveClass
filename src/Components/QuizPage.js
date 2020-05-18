import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import styles from '../CompStyles/quizPage.module.css';
import QuizQuestion from './Utilities/QuizQuestion'
import MyTimer from './Utilities/MyTimer'


function QuizPage(date) {

const [time, setTime] = useState({});

useEffect(() => {
   const date = new Date();
   setTime(date);
}, [])

    return (
        <div className={styles.quizPage}>
            <section className={styles.testHeader}>
                <div className={styles.testInfo}>
                    <p class={styles.chapName}>Chapter Name</p>
                    <p className={styles.testName}>Name of the test</p>
                </div>

                <div className={styles.testTimer}>
                   <p> <span>Time left : </span><span><MyTimer /></span> </p>
                </div>
            </section>

            <form className={styles.quizQuestionList}>
                <QuizQuestion />
                <QuizQuestion />
                <QuizQuestion />
                <QuizQuestion />
                  <Button className={styles.submitQuizBtn} variant="contained" color="secondary"><Box pt={0.5} pb={.5} pl={3.5} pr={3.5}>Submit</Box></Button>
            </form>
        </div>
    )
}

export default QuizPage
