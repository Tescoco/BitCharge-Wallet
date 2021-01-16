import React from 'react'
import Header1 from "../Header/Header"
import { Grid,Typography} from "@material-ui/core";
import Styles from "./Header.module.css";
function Header() {
    return (
        <Grid container className={Styles.container}>
            <Header1 />
            <Grid xs={12} sm={6}>  
            <Grid className={Styles.pusher}></Grid>
            <Grid  className={Styles.firstText}>
            <Typography >
                <span className={Styles.firstTextspan}>
                Get your social accounts followers
                and likes at one place instantly</span>
            </Typography>
            </Grid >
            <Grid sm={9} className={Styles.secondtext}>
             <Typography >
                 <span className={Styles.secondtextspan}>
             Save time managing your social account in one panel where people buy smm services such as facebook ads management instagram youtube twitter soundcloud website ads and many more
            </span> </Typography>          
            </Grid>
            <Grid xs={9} className={Styles.secondtext2}>
             <Typography >
                 <span className={Styles.secondtextspan}>
             Save time managing your social account in one panel where people buy smm services such as facebook instagram youtube twitter likes ,followers and many more
            </span> </Typography>          
            </Grid>
            <Grid className={Styles.thirdtext}>
               <input value="Get Started" type="button" className={Styles.signupbutton} />
            </Grid>
            </Grid>
            <Grid  sm={6}>
                <img className={Styles.image1} src="https://hqsmartpanel.com/themes/stack/assets/home/images/shape-2.svg" />
                <img className={Styles.image2} src="https://hqsmartpanel.com/themes/stack/assets/home/images/shape-3.svg" />
                <img className={Styles.image3} src="https://hqsmartpanel.com/themes/stack/assets/home/images/shape-1.svg" />
                <img className={Styles.image4} src="https://hqsmartpanel.com/themes/stack/assets/home/images/icon3.png" />
                <img className={Styles.hero}  alt="hero" src="https://i.ibb.co/ZL5Ymb7/1601556601898.png" />
            </Grid>
        </Grid>
    )
}

export default Header
