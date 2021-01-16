import React,{useEffect,useState} from 'react'
import { Divider, Grid, Typography,List,ListItem,ListItemText } from "@material-ui/core";
import Styles from "./Header.module.css"
import useScrollPosition from '@react-hook/window-scroll'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
function Header() {
  const classes = useStyles();

    const scrollY = useScrollPosition(60 /*fps*/)
    const [bg, setbg] = useState("transparent")
 useEffect(() => {
     if (scrollY >= 200) {
        setbg("white")
     }
     if (scrollY < 200) {
        setbg("transparent")
     }
      
 }, [scrollY])
    return (
        <>
        <Grid style={{backgroundColor:bg}} className={Styles.container} container>
           <Grid xs={5}>
              LOGO 
           </Grid>
           <Grid xs={1}>
               <Typography>
                   Home
               </Typography>
           </Grid >
           <Grid xs={1}>
               <Typography>
                   Services
               </Typography>
           </Grid>
           <Grid xs={1}>
               <Typography>
                About
               </Typography>
           </Grid>
           <Grid xs={1}>
               <Typography>
                   Contact
               </Typography>
           </Grid>
           <Grid xs={1}>
               <Typography>
                   Api
               </Typography>
           </Grid>
           <Grid xs={1}>
               <Typography>
                  Login 
               </Typography>
           </Grid>
           <Grid xs={1}>
               <Typography>
                   Register
               </Typography>
           </Grid>
           </Grid>
           <Grid container style={{backgroundColor:bg}} className={Styles.container2} >
<Grid xs={10}>
        LOGO   
</Grid>
<Grid xs={1}>
NAV
</Grid>
<Grid className={Styles.navLinks} container>
<List component="nav" className={classes.root} aria-label="mailbox folders">
  <ListItem button>
    <ListItemText primary="Inbox" />
  </ListItem>
  <Divider />
  <ListItem button divider>
    <ListItemText primary="Drafts" />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Trash" />
  </ListItem>
  <Divider light />
  <ListItem button>
    <ListItemText primary="Spam" />
  </ListItem>
</List>
 </Grid>
 </Grid>
        </>
    )
}

export default Header
