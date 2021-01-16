import React from 'react'
import { Card, Grid,CardContent,Typography} from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import Styles from "./Testimonies.module.css";
function Testimonies() {
    return (
       <Grid className={Styles.container} container>
         <Grid xs={1} ></Grid>
          <Grid xs={10}>
          <Typography  variant="h4" component="h1">
               <span className={Styles.description}>  What people say about us</span>
              </Typography>
              <Typography className={Styles.innerdescription} variant="p" component="h2">
                 Our service has an extensive customer roster built
                 on years worth of trust .
                 Read what people say about us
                 </Typography>
          </Grid>
          <Grid sm={4} container className={Styles.card1}>
          <Grid xs={1}></Grid>
           <Grid xs={10}>
              <Card>
              <CardContent>
              <Typography className={Styles.name} variant="p" component="h2">
                 John smart
              </Typography>
             <p className={Styles.occupation}>Director</p> 
              <Typography className={Styles.innerText} variant="body1" component="h2">
                <span >  Lorem ipsum dolor sit amet, 
                  consectetur adipisicing elit. 
                  Accusamus alias nam rerum,</span>
              </Typography>
              <Grid className={Styles.stars1} container>
              <Grid xs={3}>

                   </Grid>
                  <Grid xs={1}>
                      <StarIcon style={{color:"gold"}} />
                  </Grid>
                  <Grid xs={1}>
                     <StarIcon style={{color:"gold"}}/>
                  </Grid>
                  <Grid xs={1}>
                     <StarIcon style={{color:"gold"}}/>
                  </Grid>
                  <Grid xs={1}>
                     <StarIcon style={{color:"gold"}}/>
                  </Grid>
                  <Grid xs={1}>
                     <StarIcon style={{color:"gold"}}/>
                  </Grid>
              </Grid>
              </CardContent>
              </Card>
             </Grid>
             </Grid>
             <Grid sm={4} container className={Styles.card2}>
             <Grid xs={1}></Grid>
           <Grid xs={10}>
              <Card>
              <CardContent>
              <Typography className={Styles.name} variant="p" component="h2">
                 John smart
              </Typography>
             <p className={Styles.occupation}>Director</p> 
              <Typography className={Styles.innerText} variant="body1" component="h2">
                <span >  Lorem ipsum dolor sit amet, 
                  consectetur adipisicing elit. 
                  Accusamus alias nam rerum,</span>
              </Typography>
              <Grid className={Styles.stars2} container>
              <Grid xs={3}>

                   </Grid>
                  <Grid xs={1}>
                      <StarIcon style={{color:"gold"}} />
                  </Grid>
                  <Grid xs={1}>
                     <StarIcon style={{color:"gold"}}/>
                  </Grid>
                  <Grid xs={1}>
                     <StarIcon style={{color:"gold"}}/>
                  </Grid>
                  <Grid xs={1}>
                     <StarIcon style={{color:"gold"}}/>
                  </Grid>
                  <Grid xs={1}>
                     <StarIcon style={{color:"gold"}}/>
                  </Grid>
              </Grid>
              </CardContent>
              </Card>
              </Grid>
             </Grid>
             <Grid sm={4} container className={Styles.card3}>
             <Grid xs={1}></Grid>
           <Grid xs={10} >
              <Card >
              <CardContent >
              <Typography className={Styles.name} variant="p" component="h2">
                 John smart
              </Typography>
             <p className={Styles.occupation}>Director</p> 
              <Typography className={Styles.innerText} variant="body1" component="h2">
                <span >  Lorem ipsum dolor sit amet, 
                  consectetur adipisicing elit. 
                  Accusamus alias nam rerum,</span>
              </Typography>
              <Grid className={Styles.stars3} container>
              <Grid xs={3}>

                   </Grid>
                  <Grid xs={1}>
                      <StarIcon style={{color:"gold"}} />
                  </Grid>
                  <Grid xs={1}>
                     <StarIcon style={{color:"gold"}}/>
                  </Grid>
                  <Grid xs={1}>
                     <StarIcon style={{color:"gold"}}/>
                  </Grid>
                  <Grid xs={1}>
                     <StarIcon style={{color:"gold"}}/>
                  </Grid>
                  <Grid xs={1}>
                     <StarIcon style={{color:"gold"}}/>
                  </Grid>
              </Grid>
              </CardContent>
              </Card>
             </Grid>
             </Grid>
       </Grid>
    )
}

export default Testimonies
