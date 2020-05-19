import React from 'react';
import ReactPlayer from 'react-player';
import { Button } from '@material-ui/core';
import video from "../../mov_bbb.mp4";
import styles from '../../CompStyles/videoLecture.module.css';

function VideoLecture({ url, chapName,desc }) {
    return (
            <div class={styles.videoWrapper}>
                <div className={styles.video}>
                    <ReactPlayer height="330px" width="600px" url={video} controls />
                </div>
                <div>
                    <h2>{chapName}</h2>
                    <p>{desc}</p>
                    <Button variant="contained" color="primary">Next</Button>
                </div>
            </div>
    )
}

export default VideoLecture
