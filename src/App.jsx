import './App.css'


import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'
import Bookshelves from './pages/Bookshelves.jsx' 
import NotFoundPage from './pages/NotFoundPage.jsx'
import BookDetails from './pages/BookDetails.jsx'



import { BrowserRouter,Routes,Route } from 'react-router-dom' 
import ProtectedRoute from './components/ProtectedRoute.jsx'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={
          <ProtectedRoute>
             <HomePage/>
          </ProtectedRoute> 
        } 
        />    
        <Route path="/Bookshelves" element={<ProtectedRoute><Bookshelves/></ProtectedRoute>} />    
        <Route path="/Bookshelves/:id" element={<ProtectedRoute><BookDetails /></ProtectedRoute>} />    
        <Route path="/*" element={<ProtectedRoute><NotFoundPage /></ProtectedRoute>} />    
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
