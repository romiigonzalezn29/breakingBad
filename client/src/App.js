import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import LandingPage from './components/LandingPage';

import Home from './components/Home';
import CharacterCreated from './components/CharacterCreated';
import CharacterDetail from './components/CharacterDetail';

function App() {
  return (
    <BrowserRouter>
    <div className="App" >

      
      <Switch> 

      <Route exact path= "/" component= {LandingPage}/> 
      <Route path= '/home' component={Home}/>
      <Route path= '/character' component={CharacterCreated}/>
      <Route path="/home/:id" component={CharacterDetail}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
