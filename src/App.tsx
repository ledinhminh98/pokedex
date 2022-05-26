import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/styles'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Routes from 'routes'
import store from 'store'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import theme from './styles/theme'

const App: React.FC = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
          <GlobalStyle />
        </Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
)

export default App
