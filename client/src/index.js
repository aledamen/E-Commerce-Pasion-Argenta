import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import store from './store/store'
import { ThemeProvider } from '@mui/system'
import { theme } from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router>
                <App />
            </Router>
        </ThemeProvider>
    </Provider>
)
