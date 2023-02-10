import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexTemplate from '../containers/IndexTemplate'
import Home from '../pages/Home'

import Seo from '../components/Seo'
import { Events } from '../pages/Events'
import About from '../pages/About'
import ErrorPage from '../components/ErrorPage'
import Loading from '../components/Loading'
import { Suspense } from 'react'

function App () {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Seo />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<IndexTemplate />} >
              <Route index element={<Home/>} />
              <Route path='about' element={<About />} />
              <Route path='events' element={<Events/>} />
              <Route path='*' element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>

  )
}

export default App
