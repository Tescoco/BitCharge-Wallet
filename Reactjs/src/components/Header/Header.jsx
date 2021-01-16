import React,{useEffect,useState} from 'react'
import { Grid, Typography } from "@material-ui/core";
import Styles from "./Header.module.css"
import useScrollPosition from '@react-hook/window-scroll'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
    list: {
        
      width: 250,
    },
    fullList: {
       width: 'auto',
    },
  });

function Header({color}) {
    const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
     className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
         <ListItem button key="Home">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button key="What we offer!">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="What we offer!" />
          </ListItem>
          <ListItem button key="Services">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button key="Login">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button key="Sign Up">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Sign Up" />
          </ListItem>
      </List>
      
    </div>
  );
    const scrollY = useScrollPosition(60 /*fps*/)
    const [bg, setbg] = useState("transparent")
 useEffect(() => {
     if (scrollY >= 200) {
        setbg(color)
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
<React.Fragment key={'top'}>
          <Button onClick={toggleDrawer('top', true)}>Nav</Button>
          <Drawer anchor={'top'} open={state['top']} onClose={toggleDrawer('top', false)}>
            {list('top')}
          </Drawer>
        </React.Fragment>
</Grid>
 </Grid>
        </>
    )
}

export default Header
