import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { BrowserRouter } from 'react-router-dom'
import '../src/scss/app.scss'

import Header from './components/Header'
import MainPage from './components/MainPage'

library.add(fab, far, fas)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MainPage />
      </BrowserRouter>
    </div>
  )
}

export default App
