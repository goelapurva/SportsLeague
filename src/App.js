
import style from "./App.module.css";
import Schedule from "./Schedule";
import Leaderboard from "./Leaderboard";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect

} from "react-router-dom";
import NotFound from "./NotFound";


function App() {
  return (
    <>
    <div class="welcomeMsg">
    
<nav id="navbar" className="nav-bar">
  <ul class="nav-list">
   <li id="faviconid"><a href="/" ><img src={process.env.PUBLIC_URL + '/favicon.ico'} alt="Images" width="30px" height="30px" color="white" />
      <b>League Web UI</b></a></li>

    <li id="schdeuleid"><a href="/schedule"><img src={process.env.PUBLIC_URL + '/Images/schedule.png'} alt="Images" width="30px" height="25px"/>
      Schedule</a></li>

   <li id="leaderid"><a href="/leaderboard"><img src={process.env.PUBLIC_URL + '/Images/leaderboard.png'} alt="Images" width="30px" height="30px" />
       Leaderboard</a></li>
    
  </ul>
</nav>

<Router>
<Switch>
  <Route path="/schedule">
    <Schedule />
  </Route>
  <Route path="/leaderboard">
    <Leaderboard />
  </Route>
  <Route exact path="/">
    <Redirect exact from="/" to="schedule" />
  </Route>
  <Route path="*">
    <Redirect from="/" to="NotFound" />
    <NotFound />
  </Route>
</Switch>
</Router>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
{/* 
<footer>
  <p id="footerText">API Version: 1.0</p>
</footer> */}
</>
  );
}

export default App;
