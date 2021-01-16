import React,{useEffect} from 'react'
import {CardContent,Grid,Card,CardActionArea,CardMedia,Typography} from "@material-ui/core"
import Styles from "./Middle.module.css";
import Aos from "aos"
import "aos/dist/aos.css"
function Middle() {
    useEffect(() => {
        Aos.init({duration : 2000})
    }, [])
    return (
        <Grid container  className={Styles.root}>
               {/* <Typography style={{marginLeft:"14%",paddingBottom:"14px",color:" rgb(255, 136, 0)"}}
                variant="h5">
                Our Services Include
               </Typography>
               */}
            <Grid data-aos="fade-down"   item xs={11} sm={4} className={Styles.firstcard}>
            <Card >
      <CardActionArea>
      <CardMedia
      className={Styles.media}
          component="img"
          alt="image1"
          height="170"
          image="https://i.ibb.co/mRDfX9V/3263443.jpg"
          title="image1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid> 

            
              <Grid data-aos="fade-down" item xs={11} sm={4} className={Styles.secondcard}>
            <Card >
      <CardActionArea>
      <CardMedia
      className={Styles.media}
          component="img"
          alt="image1"
          height="170"
          image="https://image.freepik.com/free-vector/influencer-recording-new-video_23-2148522553.jpg"
          title="image1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid> 
            <Grid data-aos="fade-down" item xs={11} sm={4} className={Styles.thirdcard}>
            <Card >
      <CardActionArea>
      <CardMedia
      className={Styles.media}
          component="img"
          alt="image1"
          height="170"
          image="https://i.ibb.co/mRDfX9V/3263443.jpg"
          title="image1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid> 
            <Grid data-aos="fade-down"   item xs={11} sm={4} className={Styles.firstcard}>
            <Card >
      <CardActionArea>
      <CardMedia
      className={Styles.media}
          component="img"
          alt="image1"
          height="170"
          image="https://i.ibb.co/mRDfX9V/3263443.jpg"
          title="image1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid> 

            
              <Grid data-aos="fade-down" item xs={11} sm={4} className={Styles.secondcard}>
            <Card >
      <CardActionArea>
      <CardMedia
      className={Styles.media}
          component="img"
          alt="image1"
          height="170"
          image="https://image.freepik.com/free-vector/influencer-recording-new-video_23-2148522553.jpg"
          title="image1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid> 
            <Grid data-aos="fade-down" item xs={11} sm={4} className={Styles.thirdcard}>
            <Card >
      <CardActionArea>
      <CardMedia
      className={Styles.media}
          component="img"
          alt="image1"
          height="170"
          image="https://i.ibb.co/mRDfX9V/3263443.jpg"
          title="image1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid> 
        </Grid>
     )
}

export default Middle
