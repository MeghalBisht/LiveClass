import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import styles from '../CompStyles/quizPage.module.css';
import QuizQuestion from './Utilities/QuizQuestion'
import MyTimer from './Utilities/MyTimer'

const questions = [
    {
        id: 1,
        question: 'Which statement about Hooks is not true?',
        correct_answer: 'C',
        answers:
            [
                {
                    value: "A",
                    answer: 'Hooks are 100% backwards-compatible and can be used side by side with classes'
                },
                {
                    value: "B",
                    answer: 'Hooks are still in beta and not available yet'
                },
                {
                    value: "C",
                    answer:
                        "Hooks are completely opt-in, there's no need to rewrite existing code"
                },
                {
                    value: "D",
                    answer: 'All of the above'
                },
            ],
    },
    {
        id: 2,
        question: 'Which of the following is a fruit?',
        correct_answer: 'A',
        answers:
            [
                {
                    value: "A",
                    answer: 'apple'
                },
                {
                    value: "B",
                    answer: 'carryminati'
                },
                {
                    value: "C",
                    answer:
                        "pubg"
                },
                {
                    value: "D",
                    answer: 'loki'
                },
            ],
    },
    {
        id: 3,
        question: 'What is the real name of Gamerdidi?',
        correct_answer: 'A',
        answers:
            [
                {
                    value: "A",
                    answer: 'Meghal'
                },
                {
                    value: "B",
                    answer: 'Normienoob'
                },
                {
                    value: "C",
                    answer: 'Loki'
                }
            ],
    },
    {
        id: 4,
        question: 'What is the day today?',
        correct_answer: 'E',
        answers:
            [
                {
                    value: "A",
                    answer: 'tomorrow'
                },
                {
                    value: "B",
                    answer: 'today'
                },
                {
                    value: "C",
                    answer: 'yesterday'
                },
                {
                    value: "D",
                    answer: 'wrong question'
                },
                {
                    value: "E",
                    answer: 'one of sunday to monday'
                }
            ],
    },
];


function QuizPage() {

    const [submitAnswer, setSubmitAnswer] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const myAns = e => {
        setSubmitAnswer((previousState) => ({ ...previousState, [e.target.name]: e.target.value }));
    }

    const resetAllStates = () => {
        setSubmitAnswer({});
        setShowResult(false);
        setScore(0);
    }

    const submitQuizHandler = (e) => {
        alert('sure?');
        setShowResult(true);
        checkAnswers(submitAnswer);
    }



    const renderResultsData = () => {
        return (questions.map(question => {
            return (
                <h3 key={question.id}>
                    {question.question} - {question.correct_answer}
                </h3>
            );
        }))
    };

    const checkAnswers = (solution) => {

        {
            let count = 0;
            questions.map(question => {

                if (question.correct_answer === solution[question.id.toString()]) {
                    count++;
                    setScore(count);
                }

            })
        }

    }

    if (showResult) {
        return (<div className={styles.quizCompleted}>
            <h1>You have completed the test!</h1>
            <h1>Your score is {score}/{questions.length} </h1>
            <h2>Correct Answers are:</h2>
            {renderResultsData()}
        </div>)
    }

    else {

        return (
            <div className={styles.quizPage}>
                <section className={styles.testHeader}>
                    <div className={styles.testInfo}>
                        <p className={styles.chapName}>Chapter Name</p>
                        <p className={styles.testName}>Name of the test</p>
                    </div>
        

                    <div className={styles.testTimer}>
                        <p> <span style={{fontSize:"20px"}}>Time left : </span><span><MyTimer submitQuizHandler={submitQuizHandler} time={10} /></span> </p>
                    </div>
                </section>

                <form className={styles.quizQuestionList}>
                    {
                        questions.map((props) => {
                            return <QuizQuestion props={props} myAns={myAns} />
                        })
                    }

                    <Button onClick={submitQuizHandler} className={styles.submitQuizBtn} variant="contained" color="secondary"><Box pt={0.5} pb={.5} pl={3.5} pr={3.5}>Submit</Box></Button>

                </form>

            </div>
        )
    }
}

export default QuizPage
