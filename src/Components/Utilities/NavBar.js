import React from 'react';
import styles from '../../CompStyles/UtilitiesStyle/NavBar.module.css';
import { AppBar, Toolbar, Typography, IconButton, Button, Grid } from '@material-ui/core';


const NavBar = () => {

    return (
        <div>
            <AppBar position="sticky" className={styles.appBar} style={{ padding: 0 }}>
                <Toolbar>
                    <Grid container spacing={24}>
                        <Grid item lg={9} md={8} xs={8} sm={6}>
                            <Typography className={styles.heading}>Dummy website name</Typography>
                        </Grid>

                        <Grid item lg={3} md={4} xs={4} sm={6}>
                            <div>
                                 <button className={styles.navBtn}>Login</button>
                                 <button className={styles.navBtn}>Select class</button>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

         
        </div>
    )
}

export default NavBar
