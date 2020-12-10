//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from './components/pages/Homepage.js';
import {AddPage} from './components/pages/AddPage.js';
import Nav from "./components/pages/Nav.js"
import Footer from "./components/pages/Footer.js"
import {ListPage} from "./components/pages/ListPage.js"

function App() {
  return (
    <>
    <Nav />
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/add" component={AddPage}/>
        <Route path="/view" component={ListPage}/>
        <Route path="/" render={()=> <div>404 NOT FOUND :)</div>}/>  
        
      </Switch>
    </Router>
    <Footer />
    </>
  );
}

export default App;

//<Route path="/add" component={AddPage}/>