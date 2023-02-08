import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexTemplate from '../containers/IndexTemplate'
import Home from '../pages/Home'

import Seo from '../components/Seo'
import { Events } from '../pages/Events'
import About from '../pages/About'

function App () {
  return (<>
    <Seo />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexTemplate />} >
          <Route index element={<Home/>} />
          <Route path='about' element={<About />} />
          <Route path='events' element={<Events/>} />

          <Route path='*' element={<h1>404</h1>} />

        </Route>
      </Routes>
    </BrowserRouter>
  </>

  )
}

export default App
