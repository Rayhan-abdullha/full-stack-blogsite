import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ContextProvider } from './context/Contex';
import 'react-toastify/dist/ReactToastify.min.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ContextProvider>
      <React.StrictMode>
      <App />
    </React.StrictMode>
    </ContextProvider>
  </React.StrictMode>
)
