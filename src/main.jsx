import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import './index.css'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<div><h2>Loading . . .</h2></div>}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Suspense>
)
