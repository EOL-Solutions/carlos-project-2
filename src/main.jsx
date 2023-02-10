import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import './index.css'
import { RecoilRoot } from 'recoil'
import Loading from './components/Loading'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loading/>}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Suspense>
)
