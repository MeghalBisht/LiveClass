import React from 'react'
import styles from '../CompStyles/lessonPage.module.css';
import LessonCard from './Utilities/LessonCard'


function LessonPage() {

    return (
        <div>
            <div style={{ marginTop: "100px" }} className={styles.lessonCards}>
                <LessonCard title="Telugu" percentage="20" background="125deg, #1D976C 0%, #9DD138 100%" />
                <LessonCard title="Hindi" percentage="3" background="125deg, #2375D3 0%, #3BA9FE 100%" />
                <LessonCard title="science" percentage="50" background="125deg, #F03748 0%, #F78179 100%" />
                <LessonCard title="biology" percentage="10" background="125deg, #20C7C3 0%, #58F4EF 100%" />
                <LessonCard title="english" percentage="60" background="125deg, #A36CFC 0%, #DAACE0 100%" />
                <LessonCard title="mathematics" percentage="26" background="125deg, #F791AB 0%, #FCE484 100%" />
                <LessonCard title="social" percentage="40" background="125deg, #FF6200 0%, #FD9346 100%" />
                <LessonCard title="general" percentage="99" background="125deg, #2375D3 0%, #67D0E8 100%" />
              
            </div>
            
        </div>
    )
}

export default LessonPage
