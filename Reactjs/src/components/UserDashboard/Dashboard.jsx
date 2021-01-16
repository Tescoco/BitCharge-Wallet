import React,{useState} from 'react'
import Styles from "./Dashboard.module.css"
function Dashboard() {
    const [dripfeed, setdripfeed] = useState(false)
    const [description, setdescription] = useState()
    const [link, setlink] = useState()
    const [quantity, setquantity] = useState(0)
    const [runs, setruns] = useState(1)
    const [interval, setinterval] = useState()
   // const  tquantity = runs * quantity
    const price = 10
    const [tquantity,settquantity] = useState()
    const [charge,setcharge] = useState()
   // const charge = quantity * runs * price
    const dripfeedfunc = () => {
        setdripfeed(!dripfeed)
        setruns(1)
        setinterval()
    }
    const pricecalculator = (e) =>{
        setquantity(e.target.value)
        setcharge( runs * quantity* price)
        }
    //some categories dont need drip fields
    return ( 
        <div>
        <div className={Styles.root} >
            <div className={Styles.firstlabel}> 
            <label className={Styles.label}  htmlFor="Cartegory"><small>Category</small></label>
            <br />
             <select className={Styles.Service}>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
           </select>
           </div>
           <br />
           <div>
           <label className={Styles.label} htmlFor="Service"><small>Service</small></label>
           <br />
          <select className={Styles.Service}>
           <option value="volvo">Volvo</option>
           <option value="saab">Saabii</option>
           <option value="opel">Opeljj</option>
           <option value="audi">Audi</option>
          </select>
          </div>
          <div className={Styles.descriptionbox}>
              <label  className={Styles.label}><small> Description</small></label>
              <br />
              <textarea value={description} disabled={true} className={Styles.description}></textarea>
          </div>
          <div className={Styles.linkbox}>
          <label  className={Styles.label}><small>Link</small></label>
              <br />
             <input value={link} onChange={e=>{setlink(e.target.value)}} type="text" className={Styles.link} ></input>
          </div>
          <div className={Styles.quantitybox}>
          <label  className={Styles.label}><small>Quantity</small></label>
              <br />
             <input value={quantity} onChange={e=>{pricecalculator(e)}} type="text" className={Styles.quantity} ></input>
          <small className={Styles.restriction}>Min: 10 - Max: 200</small>
          </div>
          <div className={Styles.dripfeed} >
              <input onClick={dripfeedfunc} value="e" type="checkbox"/>
            <small>  <label style={{marginLeft:"1%"}}>Drip feed</label></small>
          </div>
          {dripfeed && 
          <div>
                 <div className={Styles.runsbox}>
          <label  className={Styles.label}><small>Runs</small></label>
              <br />
             <input value={runs} onChange={e=>{setruns(e.target.value);setcharge( runs * quantity* price)}} type="text" className={Styles.runs} ></input>
          </div>
          <div className={Styles.intervalbox}>
          <label  className={Styles.label}><small>Interval (minutes)</small></label>
              <br /> 
             <input value={interval} onChange={e=>{setinterval(e.target.value)}} type="text" className={Styles.interval} ></input>
          </div>
          <div className={Styles.tQuantitybox}>
          <label  className={Styles.label}><small>Total quantity</small></label>
              <br />
             <input value={tquantity} type="text" disabled={true} className={Styles.tQuantity} ></input>
          </div>

              </div>
          }
           <div className={Styles.chargebox}>
          <label  className={Styles.label}><small>Charge</small></label>
              <br />
             <input value={charge}  type="text" disabled={true} className={Styles.charge} ></input>
          </div>
          <div className={Styles.submitbox}>
         <button className={Styles.submit}>Submit</button>
          </div>
            </div>

        </div>
    )
}

export default Dashboard
