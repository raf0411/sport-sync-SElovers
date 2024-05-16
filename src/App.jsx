import Navbar from './components/navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Venues from './pages/Venues.jsx';
import Community from './pages/Community.jsx';
<<<<<<< HEAD
import LoginRegister from './pages/LoginRegister.jsx';
=======
import Group from './pages/Group.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import GroupDetail from './components/group-detail/GroupDetail.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Profile from './pages/Profile/Profile.jsx';

// Iss

const router = createBrowserRouter([
  {
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/venues',
        element: <Venues />,
      },
      {
        path: '/community',
        element: <Community />,
      },
      {
        path: '/group',
        element: <Group />,
      },
      {
        path: '/group/:groupId',
        element: <GroupDetail />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ]
  }

])
>>>>>>> 10ecbcd0ac68a6403cd8d7d13576cc4e7c475f84

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/venues' element={<Venues />}>
            <Route path=':venuesId'></Route>
          </Route>
          <Route path='/community' element={<Community />}>
            <Route path=':communityId'></Route>
          </Route>
          <Route path='/login' element={<LoginRegister />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
/*test doang xixixi */

export default App
