import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import BasicNav from "./components/Nav/basicNav";
import Activities from "./pages/Activities";
import API from "./utils/API"

function App () {

// const [isLoggedIn, setIsLoggedIn] = useState(false)

//   useEffect(() => {
//     API.status()
//       .then(res => {
//           console.log("got through .then")
//         if (res.data.user) {
//           setIsLoggedIn(true);
//         }
//       })
//       .catch(e => {
//         console.log('error', e)
//       })
//   })
    return (
        <Router>
            <div> 
                <Switch>
                 
                    <Route exact path={["/","/signup"]}>
                        <BasicNav />
                        <SignUp />
                    </Route>
                   
                    <Route exact path="/signin">
                        <BasicNav />
                        <SignIn />
                    </Route>
                     
                    <Route exact path="/home" >
                        <Nav />
                        <Home />
                    </Route>
                     
                    <Route exact path="/activities" >
                        <Nav />
                        <Activities />
                    </Route>
                    
                </Switch>
            </div>
        </Router>
    )
}

export default App;