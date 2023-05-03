import { ThemeProvider } from 'styled-components'
import { CoffeesContextProvider } from './context/CoffeesContext'

import { defaultTheme } from './styles/theme/default'
import { GlobalTheme } from './styles/global'

import { Router } from './routes/Router'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <Router />
        </CoffeesContextProvider>
      </BrowserRouter>
      <GlobalTheme />
    </ThemeProvider>
  )
}
