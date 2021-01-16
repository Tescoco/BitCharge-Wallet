import React from 'react'
import {Grid,Card,CardContent, Typography} from "@material-ui/core"
import Styles from "./Middle.module.css"

function Middle() {
    const clock = 
        <svg className={Styles.svg1} version="1.1" id="L2" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
        viewBox="0 0 100 100"  >
      <circle fill="none" stroke="rgb(135, 238, 51)" stroke-width="4" stroke-miterlimit="10" cx="50" cy="50" r="48"/>
      <line fill="none" stroke-linecap="round" stroke="#fff" stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
        <animateTransform 
             attributeName="transform" 
             dur="2s"
             type="rotate"
             from="0 50 50"
             to="360 50 50"
             repeatCount="indefinite" />
      </line>
      <line fill="none" stroke-linecap="round" stroke="#fff" stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
        <animateTransform 
             attributeName="transform" 
             dur="15s"
             type="rotate"
             from="0 50 50"
             to="360 50 50"
             repeatCount="indefinite" />
      </line>
      </svg>

      const api = <svg version="1.1" className={Styles.svg2} id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
      viewBox="0 0 100 100" enable-background="new 0 0 100 100" >
    <rect  x="-1" fill="#fe8464" width="3" height="50" transform="translate(0) rotate(180 20 50)">
      <animate
          attributeName="height"
          attributeType="XML"
          dur="2s"
          values="0; 50; 0"
          repeatCount="indefinite"
          begin="0.7s"/>
    </rect>
    <rect x="25" fill="#fe8464" width="3" height="50" transform="translate(0) rotate(180 40 50)">
      <animate
          attributeName="height"
          attributeType="XML"
          dur="2s"
          values="0; 50; 0"
          repeatCount="indefinite"
          begin="0.5s"/>
    </rect>
    <rect x="46" width="3" fill="#fe8464" height="50" transform="translate(0) rotate(180 58 50)">
    
      <animate
          attributeName="height"
          attributeType="XML"
          dur="2s"
          values="0; 50; 0"
          repeatCount="indefinite"
          begin="0.3s"/>
    </rect> 
    <rect x="67" fill="#fe8464" width="3" height="50" transform="translate(0) rotate(180 76 50)">
      <animate
          attributeName="height"
          attributeType="XML"
          dur="2s"
          values="0; 50; 0"
          repeatCount="indefinite"
          begin="0.1s"/>
    </rect>
    </svg>
    const galaxy = <svg version="1.1" id="L3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    viewBox="0 0 100 100" enable-background="new 0 0 0 0" >
  <circle fill="none" stroke="rgba(255, 60, 0, 0.877)" stroke-width="2" cx="50" cy="50" r="34" style={{opacity:1}}>
      </circle>
    <circle fill="rgb(161, 245, 25)"  cx="22" cy="30" r="4" >
      <animateTransform
        attributeName="transform"
        dur="2s"
        type="rotate"
        from="0 50 48"
        to="360 50 52"
        repeatCount="indefinite" />
      
    </circle>
    <circle fill="none" stroke=" rgba(253, 171, 18, 0.877)" stroke-width="2" cx="50" cy="50" r="24" style={{opacity:1}}>
      </circle>
    <circle fill="rgb(219, 219, 219)"  cx="42" cy="27" r="4" >
      <animateTransform
        attributeName="transform"
        dur="2.5s"
        type="rotate"
        from="0 50 48"
        to="360 50 52"
        repeatCount="indefinite" />
      
    </circle>
    <circle fill="none" stroke="rgb(161, 245, 25)" stroke-width="2" cx="50" cy="50" r="14" style={{opacity:1}}>
      </circle>
    <circle fill="rgba(253, 171, 18, 0.877)"  cx="45" cy="37" r="4" >
      <animateTransform
        attributeName="transform"
        dur="3s"
        type="rotate"
        from="0 50 48"
        to="360 50 52"
        repeatCount="indefinite" />
      
    </circle>
  </svg>
    return (
        <>
         <Grid className={Styles.root2}>
         <Grid className={Styles.innerroot} spacing="3" container>
          <Grid sm={3} item style={{paddingLeft:"200px"}} >
              <Card className={Styles.card1}>
                  <CardContent style={{backgroundColor:"rgb(43, 49, 55)",color:"white"}}>
                      {api}
                  <Typography variant="h6">
                       24/7 Customer Support
                  </Typography>
                  <Typography>
                     Our Customer service,answers your queries 
                     with second
                  </Typography>
         </CardContent>
              </Card>
          </Grid>
          <Grid   sm={3} item style={{paddingLeft:"200px"}}>
              <Card className={Styles.card2}>
                  <CardContent style={{backgroundColor:"rgb(43, 49, 55)",color:"white"}}>
                      {galaxy}
                  <Typography variant="h6">
                    360 degrees services
                  </Typography>
                  <Typography>
                     Our Customer service,answers your queries 
                     with second
                  </Typography>
         </CardContent>
              </Card>
          </Grid>
          <Grid  sm={3} item style={{paddingLeft:"200px"}}>
              <Card className={Styles.card3}>
                  <CardContent style={{backgroundColor:"rgb(43, 49, 55)",color:"white"}}>
                      {clock}
                  <Typography variant="h6">
                       24/7 Customer Support
                  </Typography>
                  <Typography>
                     Our Customer service,answers your queries 
                     with second
                  </Typography>
         </CardContent>
              </Card>
          </Grid>
          
          </Grid>
         </Grid>
      <Grid className={Styles.root}>
          <Grid className={Styles.innerroot} container>
              <Grid xs={1} item></Grid>
          <Grid xs={10} item>
              <Card className={Styles.card1}>
                  <CardContent style={{backgroundColor:"rgb(43, 49, 55)",color:"white"}}>
                      {api}
                  <Typography variant="h6">
                       24/7 Customer Support
                  </Typography>
                  <Typography>
                     Our Customer service,answers your queries 
                     with second
                  </Typography>
         </CardContent>
              </Card>
          </Grid>
          </Grid>
          <Grid  className={Styles.innerroot2} container>
              <Grid item xs={1}></Grid>
          <Grid item xs={10}>
              <Card>
                  <CardContent style={{backgroundColor:"rgb(43, 49, 55)",color:"white",marginTop:"-10px"}}>
                      {galaxy}
                  <Typography variant="h6">
                       24/7 Customer Support
                  </Typography>
                  <Typography>
                     Our Customer service,answers your queries 
                     with second
                  </Typography>
         </CardContent>
              </Card>
          </Grid>
          </Grid>
          <Grid className={Styles.innerroot2} container>
              <Grid xs={1}></Grid>
          <Grid xs={10}>
              <Card>
                  <CardContent style={{backgroundColor:"rgb(43, 49, 55)",color:"white"}}>
                      {clock}
                  <Typography variant="h6">
                       24/7 Customer Support
                  </Typography>
                  <Typography>
                     Our Customer service,answers your queries 
                     with second
                  </Typography>
         </CardContent>
              </Card>
          </Grid>
          </Grid>
      </Grid> 
     
      </>
    )
}

export default Middle
