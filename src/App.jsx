import ItemList from "./Pages/ItemList"
import ThemePage from "./Pages/ThemePage"
import { useContext } from "react";
import { ThemeContext } from './Components/ThemeContext.jsx'


function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#000', color: theme === 'light' ? '#000' : '#fff' }}>
      <ItemList />
      <ThemePage />
    </div>
  )
}

export default App
