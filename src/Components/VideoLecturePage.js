import React from 'react';
import VideoLecture from '../Components/Utilities/VideoLecture';
import LessonCard from './Utilities/LessonCard'
import styles from '../CompStyles/lessonPage.module.css';
import video from "../mov_bbb.mp4";

function VideoLecturePage() {
    return (
        <div>
            <div>
                {/* <VideoLecture url={video} chapName="Mathematics" desc="Mathematics lecture by pubg master Gamerdidi" /> */}
                <VideoLecture url="https://www.youtube.com/watch?v=7sDY4m8KNLc"  chapName="Mathematics" desc="Mathematics lecture by pubg master Gamerdidi" />
            </div>
            <div>
                <h2 style={{margin: "20px 0 0 105px", color: "red"}}>Progress Bar</h2>
                <div className={styles.lessonCards}>
                    <LessonCard title="video" percentage="44" background="125deg, #2375D3 0%, #3BA9FE 100%" />
                    <LessonCard title="pdf" percentage="60" background="125deg, #A36CFC 0%, #DAACE0 100%" />
                    <LessonCard title="excel" percentage="26" background="125deg, #F791AB 0%, #FCE484 100%" />
                    <LessonCard title="assignment" percentage="40" background="125deg, #FF6200 0%, #FD9346 100%" />
                </div>
            </div>
        </div>
    )
}

export default VideoLecturePage
