import './App.css';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// third party imports

function App() {
  return (
    <div className='app'>
      <div className='app_body'>
        <Router>
          <Switch>
            <Sidebar/>
            <Route exact path="/">
              {/* <Chat/> */}
            </Route>
            <Route path="/rooms/:roomId">              
              <Chat/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
export default App;
