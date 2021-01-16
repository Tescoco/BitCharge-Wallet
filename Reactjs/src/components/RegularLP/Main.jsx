import React from 'react'
import  Header  from "../RegularLP/Header";
import  Middle  from "../RegularLP/Middle";
import  About  from "../RegularLP/About";
import  Footer  from "../Footer/Footer";
import Testimonies from './Testimonies';
function Main() {
    return (
       <div>
           <Header />
               <About />
           <Middle />
       <Testimonies />
           <Footer/>
     </div>
    )
}

export default Main
