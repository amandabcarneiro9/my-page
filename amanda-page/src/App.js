import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../src/scss/app.scss'
import Footer from './components/footer/Footer'

import Header from './components/header/Header'
import MainPage from './components/mainPage/MainPage'
import { PlurisProject, DasTravel, CamillaProject } from './pages/Projects'

library.add(fab, far, fas)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/portfolio/pluris-project" component={PlurisProject} />
          <Route path="/portfolio/das-travel-project" component={DasTravel} />
          <Route path="/portfolio/camilla-chagas-project" component={CamillaProject} />
          <Route path="/" component={MainPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
