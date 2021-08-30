import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import MainPage from './components/MainPage'

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
