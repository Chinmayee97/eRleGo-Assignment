
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import Adddetails from "./components/Adddetails";
import Empdetails from './components/Empdetails';


function App() {
  return (
    <Router>
    <div >
      <Switch>
        <Route exact path="/emplist">
          <Empdetails/>
        </Route>

        <Route path="/addemp">
          <Adddetails/>
        </Route>
      </Switch>
      
    </div>
    </Router>
  )
}

export default App;
