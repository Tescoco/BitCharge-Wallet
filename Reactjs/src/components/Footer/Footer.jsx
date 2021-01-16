import React from 'react'
import {Link} from "react-router-dom"
import Styles from "./Footer.module.css"
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Grid, Typography} from "@material-ui/core";
function Footer() {
    return (
        <Grid container className={Styles.footer}>
            <Grid sm={7}  container className={Styles.footer1}>
            <Grid item xs={10}  sm={6} className={Styles.logo}>
                LOGO
            </Grid>
            <Grid sm={6} container className={Styles.Linkbox}>
            
            <Grid sm={12} xs={12} item className={Styles.quicklinks}>
                <Typography>
                    Quick Links
                </Typography>
            </Grid>
            
            <Grid item xs={4} sm={6}>
            <Typography>
                <Link to="/" className={Styles.Links}>
                    Home
                </Link>
                </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
            <Typography>
                <Link to="terms" className={Styles.Links}>
                   Terms {"&"} Conditions
                </Link>
                </Typography>
            </Grid>
            <Grid item xs={4} sm={6}>
            <Typography>
                <Link to="login" className={Styles.Links}>
                   Login
                </Link>
                </Typography>
            </Grid>
            <Grid item xs={5} sm={6}>
            <Typography>
                <Link to="api" className={Styles.Links}>
                   Api documentation
                </Link>
                </Typography>
            </Grid>
            <Grid item xs={4} sm={6}>
            <Typography>
                <Link to="signup" className={Styles.Links}>
                   Sign Up
                </Link>
                </Typography>
            </Grid>
            <Grid item xs={4} sm={6}>
            <Typography>
                <Link to="faqs" className={Styles.Links}>
                   FAQs
                </Link>
                </Typography>
            </Grid>
            </Grid>
            </Grid>
            <Grid sm={5} className={Styles.footer2}>
            <Grid className={Styles.infosubscribe} style={{textAlign:"center"}} item xs={12} sm={6}>
            <Typography >
                Subscribe to our Newsletter
                </Typography>
            </Grid>
            <Grid style={{paddingTop:"20px",paddingBottom:"20px"}} item xs={12} sm={6}>
        <input placeholder="example@example.com" className={Styles.input} name="email" type="email" required />
        </Grid>
            <Grid item xs={12} sm={6}>
           <input className={Styles.button} type="button" value="Submit" />
           </Grid>
         
           </Grid>
           <Grid container sm={12}>
           <Grid xs={5} item sm={6}></Grid>
             <Grid item xs={2} sm={1}>
           <TwitterIcon />
           <InstagramIcon />
           </Grid>
           </Grid>
           <Grid  container style={{textAlign:"center",paddingBottom:"20px",paddingTop:"10px"}} item xs={12} sm={6}>
           <Grid  className={Styles.footerinfo} xs={12} item> 
               <Typography>
        &copy;  {1900 + new Date().getYear()}
               </Typography>
           </Grid> 
          <Grid className={Styles.footerinfo} xs={12} item>
               <Typography>
                   All rights reserved
               </Typography>
           </Grid> 
           <Grid className={Styles.footerinfo} xs={12} item>
               <Typography>
                   Companyname
               </Typography>
           </Grid>
                   <Grid className={Styles.footerinfo2} sm={12} item>
               <Typography>
               &copy;  {1900 + new Date().getYear()}  All rights reserved
               Companyname
               </Typography>
           </Grid>
          {/* <a
            href="https://api.whatsapp.com/send?phone=2349039659073&text=Hello%20Oladevs"
            className={aClasses}
            
          >
            Oladevs
          </a> */}
            </Grid>
        </Grid>
    )
}

export default Footer
