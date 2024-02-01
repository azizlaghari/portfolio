import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'

// import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Resume from '../pages/Resume'

// import PrivateWrapper from './PrivateRoutes'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Uncommit next line to apply token security */}
        {/* <Route element={<PrivateWrapper />}> */}
        <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio/:type' element={<Portfolio />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='*' element={<Navigate to='/' />} />
        {/* </Route> */}

        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
