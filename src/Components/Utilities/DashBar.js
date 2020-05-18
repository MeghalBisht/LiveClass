import React from 'react';
import styles from '../../CompStyles/UtilitiesStyle/dashBar.module.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function DashBar() {
    return (
        <div className={styles.dashBar}>
            <ul>
            <li>lessons</li>
            <li>assignments</li>
            <li>live streaming</li>
            </ul>
        </div>
    )
}

export default DashBar
