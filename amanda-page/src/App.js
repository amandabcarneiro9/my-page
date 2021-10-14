import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { BrowserRouter, Route } from 'react-router-dom'
import '../src/scss/app.scss'

import Header from './components/header/Header'
import MainPage from './components/mainPage/MainPage'

library.add(fab, far, fas)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" component={MainPage} />
      </BrowserRouter>
    </div>
  )
}

export default App
