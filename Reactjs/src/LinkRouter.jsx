import React from "react"
import { Route,Switch,BrowserRouter} from "react-router-dom"
import UserDashboard from "./components/UserDashboard/Dashboard"
import Home from "./components/RegularLP/Main"
import Etebium from "./components/EtebiumLP/Main";
const LinkRouter = () =>{
    
    
    return(
    <div>
        <BrowserRouter >
       <Switch >
       <Route exact path="/" component={Etebium} /> 
       <Route exact path="/" component={Home} /> 
      <Route exact path="/home" component={ UserDashboard} />   
        </Switch>
           </BrowserRouter>
    </div>)
}

export default LinkRouter