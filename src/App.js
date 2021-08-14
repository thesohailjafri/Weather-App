import React from 'react'
import './Styles/AppStyle/app.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


/* PAGES */
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Error from './Pages/Error'

/* COMPONENTS */
import Navbar from './Components/Navbar'



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/service'>
            <Service />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/*'>
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App
