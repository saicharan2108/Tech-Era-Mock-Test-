import './App.css'
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import CourseDetails from './components/CourseDetails'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseDetails} />
      <Route path="/bad-path" component={NotFound} />
    </Switch>
  </>
)

export default App
