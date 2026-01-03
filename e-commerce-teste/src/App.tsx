import Home from './pages/Home/Home'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark')
    }

    if (localStorage.getItem('theme') == 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <>
      <Home/>
    </>
  )
}

export default App
