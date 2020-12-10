import logo from './logo.svg';
import './App.css';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Login } from './components/Login'
import { NavBar } from './shared/navbar';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { Home } from './components/Home';
import { Footer } from './shared/footer';

function App() {
  return (
    <Router>
        
          <header>
            <NavBar/>
          </header>
        
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route> 
      <Route exact path='/login' component={Login}></Route> 
      <Footer></Footer>
   </Router>     
  );
}

export default App;
