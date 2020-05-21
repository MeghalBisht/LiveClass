import React, { useState, useEffect } from 'react';
import styles from '../../CompStyles/UtilitiesStyle/lessonCard.module.css';
import ProgressBar from '../Utilities/ProgressBar';
import styled from 'styled-components';

const ColorCard = styled.div`
   background: transparent linear-gradient(${props => props.background}) 0% 0% no-repeat padding-box;   
   margin: 20px 30px;
    padding: 10px;
     border-radius: 10px;
    width: 270px;
    height: 150px;
`;

function LessonCard(props) {


    const [percentage, setPercentage] = useState(0);
    useEffect(() => {
        setPercentage(percentage);
    }, percentage);

    return (
        <>
            <ColorCard className={styles.lessonCard} background={props.background}>

                <h2>{props.title}</h2>
                <ul>
                    <li>12 Videos</li>
                    <li>3 Exams</li>
                    <li>4 Subjects</li>
                </ul>
                <ProgressBar percentage={props.percentage} />

            </ColorCard>
        </>
    )
}

export default LessonCard
