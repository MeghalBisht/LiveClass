import React from 'react';
import styles from '../CompStyles/loginPage.module.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { TextField, Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';


function LoginPage() {
    return (
        
        <div className={styles.centerAlign}>

            <div className={styles.formWrapper}>
                <form className={styles.loginForm} noValidate autoComplete="off">
                    <TextField className={styles.inputs} id="login-username" label="Username" />
                    <TextField className={styles.inputs} id="login-password" label="Password" />

                    <Button variant="contained" color="primary"><Box pt={.5} pb={.5} pl={2} pr={2}>Login </Box></Button>
                </form>
            </div>

            <div className={styles.socialIcons}>
                <TwitterIcon className={styles.icon} style={{ color:'#376BAA' }}/>
                <FacebookIcon className={styles.icon}  style={{ color:'#376BAA' }}/>
                <InstagramIcon className={styles.icon} style={{ color:'#376BAA' }} />
            </div>

        </div>
    )
}

export default LoginPage
