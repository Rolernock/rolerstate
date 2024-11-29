import './App.css'
import { Routes, Route } from 'react-router'
import MainLayout from './components/MainLayout'
import NotFoundPage from './screens/PageNotFound'
import ContactScreen from './screens/ContactScreen'
import ReadMessageScreen from './screens/ReadMessagesScreen'
import GalleryScreen from './screens/GallertyScreen'
import HomeScreen from './screens/HomeScreen'
import BlogScreen from './screens/BlogScreen'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='/blog' element={<BlogScreen />} />
        <Route path='/gallery' element={<GalleryScreen />} />
        <Route path='/sms' element={<ReadMessageScreen />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
