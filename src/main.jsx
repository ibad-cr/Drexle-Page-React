import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './assets/sass/style.scss'
import { ProdProvider } from './assets/context/ProdContext'
import { BlogProvider } from './assets/components/BlogContext.jsx'
import { CartProvider } from 'react-use-cart'
import { LangProvider } from './assets/context/Language.jsx'
import { ModeProvider } from './assets/context/Mode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < ModeProvider>
      <LangProvider>
        <ProdProvider>
          <BlogProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </BlogProvider>
        </ProdProvider>
      </LangProvider>
    </ModeProvider>
  </React.StrictMode>
)
