import React from 'react'
import LessonCard from './Utilities/LessonCard'
import styles from '../CompStyles/liveSchedule.module.css';

function LiveSchedule() {
    return (
        <div className={styles.liveSchedule}>

         <div>
            <h3>Ongoing</h3>
            <div className={styles.liveCards} >
            <LessonCard title="social" percentage="40" background="125deg, #FF6200 0%, #FD9346 100%"/>
            <LessonCard title="biology" percentage="53" background="125deg, #20C7C3 0%, #58F4EF 100%"/>
            </div>
        </div>

        <div>
            <h3>Scheduled live sessions</h3>
            <div className={styles.liveCards} >
            <LessonCard title="Telugu" percentage="20" background="125deg, #1D976C 0%, #9DD138 100%"/>
            <LessonCard title="Hindi" percentage="88" background="125deg, #2375D3 0%, #3BA9FE 100%" />
            <LessonCard title="english" percentage="60" background="125deg, #F03748 0%, #F78179 100%"/>
            </div>
        </div>
        </div>
    )
}

export default LiveSchedule
