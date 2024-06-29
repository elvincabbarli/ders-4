import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './Components/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
)
