import '@/global.css'

import { Toaster } from './components/ui/sonner'


import { Routes } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
export function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet 
          titleTemplate="%s | pizza.shop"
        />
        <Toaster richColors closeButton/>
        <Routes />
      </HelmetProvider>
    </>
  )
}
