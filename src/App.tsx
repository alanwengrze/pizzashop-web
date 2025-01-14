import '@/global.css'

import { Toaster } from './components/ui/sonner'
import { ThemeProvider } from './components/theme/theme-provider'

import { Routes } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
export function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider storageKey='pizzashop-theme' defaultTheme='dark'>
          <Helmet 
            titleTemplate="%s | pizza.shop"
          />
          <Toaster richColors closeButton/>
          <Routes />
        </ThemeProvider>
      </HelmetProvider>
    </>
  )
}
