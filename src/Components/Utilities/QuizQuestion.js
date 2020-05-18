import React from 'react';
import styles from '../../CompStyles/UtilitiesStyle/quizQuestion.module.css';

function QuizQuestion() {
    return (
        <div className={styles.questionWrapper}>
            <p className={styles.questionNumber}>Question 1</p>
            <p className={styles.questionContent}>CSS stands for :</p>

            <div className={styles.questionOptions}>

                <div>
                    <input type="radio" name="question-1-answers" id="question-1-answers-A" value="A" />
                    <label for="question-1-answers-A"> Computer Styled Sections </label>
                </div>

                <div>
                    <input type="radio" name="question-1-answers" id="question-1-answers-B" value="B" />
                    <label for="question-1-answers-B"> Cascading Style Sheets</label>
                </div>

                <div>
                    <input type="radio" name="question-1-answers" id="question-1-answers-C" value="C" />
                    <label for="question-1-answers-C"> Crazy Solid Shapes</label>
                </div>

                <div>
                    <input type="radio" name="question-1-answers" id="question-1-answers-D" value="D" />
                    <label for="question-1-answers-D"> None of the above</label>
                </div>


            </div>

          

        </div>
    )
}

export default QuizQuestion
