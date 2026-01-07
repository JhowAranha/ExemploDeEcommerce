import Home from './pages/Home/Home'
import ProductPage from './pages/Product/Product'
import { useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/product/:id' element={<ProductPage/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
