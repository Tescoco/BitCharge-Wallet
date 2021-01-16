import React, { useEffect,useState } from 'react'
import Styles from "./HIW.module.css"
import useScrollPosition from '@react-hook/window-scroll'
import { Grid, Typography,CircularProgress } from "@material-ui/core";
function HIW() {
    const [progress1, setprogress1] = useState(0)
    const [progress2, setprogress2] = useState(0)
    const [progress3, setprogress3] = useState(0)
    const [progress4, setprogress4] = useState(0)
     const scrollY1 = useScrollPosition(60)
    
    useEffect(() => {
          if(scrollY1 >= 1200){
  setprogress1(25)
}
else{
    setprogress1(0)
}
if(scrollY1 >= 1600){
    setprogress2(50)
  }
  else{
      setprogress2(0)
  }
  if(scrollY1 >= 1800){
    setprogress3(75)
  }
  else{
      setprogress3(0)
  }
  if(scrollY1 >= 2000){
    setprogress4(100)
  }
  else{
      setprogress4(0)
  }
 if(window.innerWidth > 1300){
    if(scrollY1 > 700){
        setprogress1(25)
        setprogress2(50)
        setprogress3(75)
        setprogress4(100)
    }
    else{
        setprogress1(0)
        setprogress2(0)
        setprogress3(0)
        setprogress4(0)
    }

}
      }, [scrollY1])
    return (
        <>
        <Grid className={Styles.root} style={{color:"white"}}>
            <Grid container >
                <Grid xs={3}></Grid>
            <Grid xs={6} className={Styles.header}> 
                <Typography variant="h5">
                    How it works
                </Typography>
            </Grid>
            <Grid xs={3}></Grid>
            <Grid xs={2}></Grid>
            <Grid xs={8} className={Styles.secondHeader}>
            <Typography variant="h6">
                 Descover how it works in few easy steps
                </Typography>
            </Grid>
            </Grid>
            
            <Grid container>
                <Grid xs={10}>
                   
                <CircularProgress color="secondary" size="10em" className={Styles.spinner1} thickness={3} 
                variant="static" value={progress1} />
                <Grid className={Styles.Number1}>1</Grid>
                </Grid>
                <Grid xs={3}></Grid>
                <Grid xs={6}>
                <Typography className={Styles.Minfo} variant="h5">
                <span style={{fontSize:"18px"}}>  1.Sign Up</span>
                </Typography>
            </Grid>
            <Grid xs={3}></Grid>
            <Grid xs={2}></Grid>
            <Grid xs={8}>
            <Typography style={{paddingBottom:"15px",marginLeft:"2%"}} variant="h6" className={Styles.Mdesc}>
            <span style={{fontSize:"18px"}}>  Start with registering on ou panel and logging in.
              </span> </Typography>
            </Grid> 
            <Grid xs={10}>
            
                <CircularProgress color="secondary" size="10em" className={Styles.spinner1} thickness={3} 
                variant="static" value={progress2} />
                <Grid className={Styles.Number2}>2</Grid>
                </Grid>
                <Grid xs={3}></Grid>
                <Grid xs={6}>
                <Typography  className={Styles.Minfo2} variant="h5">
              <span style={{fontSize:"18px",marginLeft:"10%"}}> 2.Deposit funds</span>
                </Typography>
            </Grid>
            <Grid xs={3}></Grid>
            <Grid xs={2}></Grid>
            <Grid xs={8}>
            <Typography variant="h6" style={{marginLeft:"2%",paddingBottom:"10px"}} className={Styles.adesc}>
            <span style={{fontSize:"18px"}}> Now you need to add funds using a payment method you prefer  </span>  </Typography>
            </Grid> 
            <Grid xs={10}>
               <CircularProgress color="secondary" size="10em" className={Styles.spinner1} thickness={3} 
                variant="static" value={progress3} />
                <Grid className={Styles.Number3}>3</Grid>
                </Grid>
                <Grid xs={3}></Grid>
                <Grid xs={6} >
                <Typography style={{paddingBottom:"10px"}} variant="h5">
                <span style={{fontSize:"18px",marginTop:"1px"}}>  3.Place an order </span>
                </Typography>
            </Grid>
            <Grid xs={3}></Grid>
            <Grid xs={2}></Grid>
            <Grid xs={8}>
            <Typography variant="h6" style={{paddingBottom:"10px"}} className={Styles.adesc}>
            <span style={{fontSize:"18px"}}>     Select SMM services to help your buisness receive more publicity  </span>          </Typography>
            </Grid> 
            <Grid xs={10}>
                <CircularProgress  color="secondary" size="10em" className={Styles.spinner1} thickness={3} 
                variant="static" value={progress4} />
                <Grid className={Styles.Number4}>4</Grid>
                </Grid>
                <Grid xs={3}></Grid>
                <Grid xs={6}>
                <Typography className={Styles.ainfo2} variant="h5">
                <span style={{fontSize:"18px"}}>   4.Fast results </span>
                </Typography>
            </Grid>
            <Grid xs={3}></Grid>
            <Grid xs={2}></Grid>
            <Grid xs={8}>
            <Typography style={{paddingBottom:"10px"}} variant="h6" className={Styles.adesc}>
            <span style={{fontSize:"18px"}}>  You can enjoy incredible results when your order is complete
               </span></Typography>
              </Grid> 
         </Grid>
        </Grid>
        {/* Responsive for laptops */}
          <Grid className={Styles.root2} style={{color:"white"}}>
            <Grid container >
                <Grid xs={3}></Grid>
            <Grid xs={6} className={Styles.header}> 
                <Typography variant="h5">
                    How it works
                </Typography>
            </Grid>
            <Grid xs="3"></Grid>
            <Grid xs="2"></Grid>
            <Grid xs={8} className={Styles.secondHeader}>
            <Typography variant="h6">
                 Descover how it works in few easy steps
                </Typography>
            </Grid>
            </Grid>
            
            <Grid container>
            <Grid sm={3} >
                <Grid xs={10}>
                   
                <CircularProgress color="secondary" size="10em" className={Styles.spinner1} thickness={3} 
                variant="static" value={progress1} />
                <Grid className={Styles.Number1}>1</Grid>
                </Grid>
                <Grid xs={3} ></Grid>
                <Grid xs={6} className={Styles.infobox}>
                <Typography className={Styles.info} variant="h5">
                <span style={{fontSize:"18px"}}>   1.Sign Up</span>
                </Typography>
            </Grid>
            <Grid xs={3}></Grid>
            <Grid xs={2} ></Grid>
            <Grid xs={8} sm={10} className={Styles.descbox}>
            <Typography variant="h6" className={Styles.desc}>
            <span style={{fontSize:"18px"}}>  Start with registering on our <br/>panel  and logging in.</span>
               </Typography>
            </Grid> </Grid>
             <Grid sm={3}>
                <Grid xs={10}>
                   
                <CircularProgress color="secondary" size="10em" className={Styles.spinner2} thickness={3} 
                variant="static" value={progress2} />
                <Grid className={Styles.Number2}>2</Grid>
                </Grid>
                <Grid xs={3}></Grid>
                <Grid xs={6} className={Styles.infobox2}>
                <Typography className={Styles.info2} variant="h5">
                <span style={{fontSize:"18px"}}>  2.Deposit funds </span>
                </Typography>
            </Grid>
            <Grid xs={3}></Grid>
            <Grid xs={2} ></Grid>
            <Grid xs={8} className={Styles.descbox2}>
            <Typography variant="h6" className={Styles.desc2}>
  <span style={{fontSize:"18px"}}> Now you need to add funds using a<br/> payment method you prefer </span>   </Typography>
            </Grid> 
            </Grid>
            <Grid sm={3}>
                <Grid xs={10}>
                   
                <CircularProgress color="secondary" size="10em" className={Styles.spinner3} thickness={3} 
                variant="static" value={progress3} />
                <Grid className={Styles.Number3}>3</Grid>
                </Grid>
                <Grid xs={3}></Grid>
                <Grid xs={6} className={Styles.infobox3}>
                <Typography className={Styles.info3} variant="h5">
                <span style={{fontSize:"18px"}}>   3.Place an order</span>
                </Typography>
            </Grid>
            <Grid xs={3}></Grid>
            <Grid xs={2}></Grid>
            <Grid xs={8} className={Styles.descbox3}>
            <Typography variant="h6" className={Styles.desc3}>
            <span style={{fontSize:"18px"}}>   Select SMM services to help<br /> your buisness receive more publicity     </span>
                   </Typography>
           
            </Grid> </Grid>
             <Grid sm={3}>
                <Grid xs={10}>
                   
                <CircularProgress color="secondary" size="10em" className={Styles.spinner4} thickness={3} 
                variant="static" value={progress4} />
                <Grid className={Styles.Number4}>4</Grid>
                </Grid>
                <Grid xs={3}></Grid>
                <Grid xs={6} className={Styles.infobox4}>
                <Typography className={Styles.info4} variant="h5">
                <span style={{fontSize:"18px"}}>    4.Fast results </span>
                </Typography>
            </Grid>
            <Grid xs={8} className={Styles.descbox4}>
            <Typography variant="h6" className={Styles.desc4}>
            <span style={{fontSize:"18px"}}> You can enjoy incredible results<br /> when your order is complete
                </span></Typography>
            </Grid> 
            </Grid>
            
            </Grid> 
            </Grid>
        </>
    )
}

export default HIW
