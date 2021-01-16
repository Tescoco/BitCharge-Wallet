import React,{useEffect} from 'react'
import { Grid, Typography } from "@material-ui/core";
import Aos from "aos"
import "aos/dist/aos.css"
import Styles from "./About.module.css";

function About() {
    useEffect(() => {
        Aos.init({duration : 2000})
   }, [])
    return (
       <Grid container className={Styles.about}> 
          <Grid xs={12} item sm={6} data-aos="fade-right">
         <img alt="about" className={Styles.media} src="https://i.ibb.co/b1xsFVS/8c5c92d1-d151-448e-ac14-edba79bfb7cc.png"/>
          </Grid>
          <Grid className={Styles.words} xs={11} item sm={5}>
              <Typography className={Styles.aboutus} variant="h4" component="h4">
                About us 
              </Typography>
              <Typography className={Styles.aboutustext1} variant="h6" component="h6">
                 <span className={Styles.aboutustext1span}>
                  A Little About Company name
                  </span>
              </Typography>
              <Typography className={Styles.aboutustext2} variant="body1" component="p">
              <span className={Styles.aboutustext2span}>
              Lorem ipsum, dolor sit amet consectetur adipisicing 
              elit. Exercitationem repellendus, nam cumque
               molestiae nulla itaque hic voluptatem consequuntur 
               doloremque quae reprehenderit. Provident, magni 
              suscipit totam aperiam veritatis cum ad facere!
             <br/>
             <br/>
             Lorem ipsum, dolor sit amet consectetur adipisicing 
              elit. Exercitationem repellendus, nam cumque
               molestiae nulla itaque hic voluptatem consequuntur 
               doloremque quae reprehenderit. Provident, magni 
              suscipit totam aperiam veritatis cum ad facere!
              </span>
               </Typography>
              </Grid>
       </Grid>
    )
}

export default About
