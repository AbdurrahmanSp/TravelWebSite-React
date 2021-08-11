
import './App.css';
import Navbar from './Componenst/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Componenst/pages/Home'
import Services  from './Componenst/pages/Services';
import Products  from './Componenst/pages/Products';
import SignUp  from './Componenst/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/sing-up" exact component={SignUp} />
        </Switch> 
      </Router>
    </>
  );
}

export default App;
