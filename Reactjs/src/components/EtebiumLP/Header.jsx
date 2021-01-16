import React,{useState,useEffect} from 'react'
import Styles from "./Header.module.css"
import HeaderTop from "../Header/Header";
import { Grid, Typography } from "@material-ui/core";
function Header() {
     useEffect(() => {
        setInterval(() => {
            usersloader()
        }, 5500);
        setTimeout(() => {
            usersloader()
       }, 1000);
     }, [])
    const usersloader = () =>{
       setTimeout(() => {
        setusers("Yo")
       },100);
       setTimeout(() => {
        setusers("Y")
       },200);
    //    setTimeout(() => {
    //     setusers("")
    //    },300);
       setTimeout(() => {
        setusers("B")
       },300);
       setTimeout(() => {
        setusers("Bu")
       },400);
       setTimeout(() => {
        setusers("Bus")
       },450);
       setTimeout(() => {
        setusers("Busi")
       },500);
       setTimeout(() => {
        setusers("Busin")
       },550);
       setTimeout(() => {
        setusers("Busine")
       },600);
       setTimeout(() => {
        setusers("Busines")
       },650);
       setTimeout(() => {
        setusers("Business")
       },700);
       setTimeout(() => {
        setusers("Busines")
       },1500);
       setTimeout(() => {
        setusers("Busine")
       },1550);
       setTimeout(() => {
        setusers("Busin")
       },1600);
       setTimeout(() => {
        setusers("Busi")
       },1650);
       setTimeout(() => {
        setusers("Bus")
       },1700);
       setTimeout(() => {
        setusers("Bu")
       },1850);
       setTimeout(() => {
        setusers("B")
       },1900);
    //    setTimeout(() => {
    //     setusers("")
    //    },1950);
       setTimeout(() => {
        setusers("A")
       },2000);
       setTimeout(() => {
        setusers("Ar")
       },2050);
       setTimeout(() => {
        setusers("Art")
       },2100);
       setTimeout(() => {
        setusers("Arti")
       },2150);
       setTimeout(() => {
        setusers("Artis")
       },2200);
       setTimeout(() => {
        setusers("Artist")
       },2250);
       setTimeout(() => {
        setusers("Artists")
       },2300);
       setTimeout(() => {
        setusers("Artist") 
       },3150);
       setTimeout(() => {
        setusers("Artis") 
       },3200);
       setTimeout(() => {
        setusers("Arti") 
       },3250); 
       setTimeout(() => {
        setusers("Art") 
       },3300); 
       setTimeout(() => {
        setusers("Ar") 
       },3350); 
       setTimeout(() => {
        setusers("A") 
       },3400); 
    //    setTimeout(() => {
    //     setusers("")
    //    },3450);
       setTimeout(() => {
         setusers("Y")
        },3550);
       setTimeout(() => {
      setusers("Yo")
        },3600);
       setTimeout(() => {
        setusers("You")
       },3700);
    }
    const colorblack = "rgb(43, 49, 55)"
    const [users,setusers] = useState("You")
    return (
       <Grid  container className={Styles.root}>
           <HeaderTop color={colorblack} />
           <Grid sm="6" container>
               <Grid sm={4}>
               </Grid>
         <Grid xs={12} sm={8} className={Styles.firsttextgrid}>
             <Typography variant="h1" >
               <span className={Styles.firsttext}> Made for </span>
                <span className={Styles.users}>
                   {users}</span>
             </Typography>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid sm="8" className={Styles.secondText} xs={10}>
          <Typography >
                <span className={Styles.secondTextspan}>
                Get your social accounts followers
                and likes at one place instantly</span>
            </Typography>
            <Typography >
                <span className={Styles.secondTextspan2}>
                Save time managing your social account in  one panel
                 where people buy smm services such as facebook ads
                  management instagram youtube twitter
                 soundcloud website ads and many more</span>
            </Typography>
          </Grid>
             <Grid xs={4}></Grid>
          <Grid  xs={4}>
         <input value="Sign Up" type="button" className={Styles.button}/>

          </Grid>
          </Grid>
          <Grid sm={1}></Grid>
         
          <Grid sm={4}  className={Styles.loginbox} noValidate>
              <Grid container sm={10} className={Styles.innerloginbox}>
                   <form> <Grid sm={12} className={Styles.gridboxes}>
                  <label className={Styles.label}>Username</label>
                  <br />
                  <input required autoFocus type="text" className={Styles.input}/>
                 </Grid>
                   <Grid sm={12} className={Styles.gridboxes}>
                   <label  className={Styles.label}>Email</label>
                   <br />
                  <input required type="email" className={Styles.input}/>
                
                   </Grid>
                   <Grid sm={12} className={Styles.gridboxes}>
                   <label  className={Styles.label}>Password</label>
                   <br />
                  <input required type="password" className={Styles.input}/>
                   </Grid>
                   <Grid sm={12} className={Styles.gridboxes}>
                   <label  className={Styles.label}>Confirm Password</label>
                   <br />
                  <input required type="password" className={Styles.input}/>
                  <br />
                  <span> <small>*Password must be more than 6 characters</small></span>
                   </Grid>
                   <Grid sm={10} className={Styles.buttomMain} >
              <input href="/home" type="submit" value="Sign Up" className={Styles.button2}/>
                 </Grid></form>
                   </Grid>
          </Grid>
       </Grid>
    )
}

export default Header
