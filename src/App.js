import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home.js'
import Regiao from './pages/regiao'
import './style.css'


function App() {
  return (
    <div classname="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/regiao/:nome" component={Regiao} />          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;



