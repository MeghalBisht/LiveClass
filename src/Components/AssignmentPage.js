import React, { useState } from 'react'
import LessonCard from '../Components/Utilities/LessonCard';
import styles from '../CompStyles/assignmentCard.module.css';
import AssignmentTimer from './Utilities/AssignmentTimer';
const assignments = [
    {
        assignmentId: 1,
        subject: "Maths",
        lastDateToSubmit: "2020-05-25",
    },
    {
        assignmentId: 2,
        subject: "Civics",
        lastDateToSubmit: "2020-06-20",
    },
    {
        assignmentId: 3,
        subject: "Python",
        lastDateToSubmit: "2020-05-5",
    },
    {
        assignmentId: 4,
        subject: "Kinematics",
        lastDateToSubmit: "2020-05-29",
    },
]

function AssignmentPage() {

    const colorArray = {
        success: "122deg, #1D976C 0%, #9DD138 100%",
        failure: "131deg, #CB2D3E 0%, #EF473A 100%",
        ongoing: "132deg, #2375D3 0%, #3BA9FE 100%"
    }

    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const [ongoing, setOngoing] = useState(true);

    return (
        <>
            <h1 style={{ margin: "20px 100px" }}>Assignments</h1>
            <div className={styles.assignmentCards}>
                {
                    assignments.map((assignment) => {
                        return <LessonCard onClick={showSubmitPage} style={{ height: '10px' }} title={assignment.subject} percentage="13" background={ongoing ? colorArray['ongoing'] : colorArray['failure']}>
                            <p className={styles.track}>Time to work!</p>
                            <AssignmentTimer lastDateToSubmit={assignment.lastDateToSubmit} />
                        </LessonCard>
                    })
                }


            </div>
        </>
    )
}

export default AssignmentPage
