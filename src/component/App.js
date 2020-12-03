import React from 'react'
import Navbar from './Navbar'
import Add from '../pages/Add'
import Watched from '../pages/Watched'
import Watchlist from '../pages/WatchList'
import Error from '../pages/Error'
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import {MovieProvider} from './Context'
function App() {
  return (
   <MovieProvider>
 <Router>

  <Navbar/>
  <Switch>
      <Route exact path="/" component={Add}/>
    <Route path="/Watch-List" component={Watchlist}/>
    <Route path="/Watched" component={Watched}/>
    <Route path="*" component={Error}/>
    </Switch>

    </Router>
   </MovieProvider>
  
    
  )
}

export default App
