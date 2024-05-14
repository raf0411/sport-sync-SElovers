import Navbar from './components/navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Venues from './pages/Venues.jsx';
import Community from './pages/Community.jsx';
import Group from './pages/Group.jsx';
import LoginRegister from './pages/LoginRegister.jsx';

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
          <Route path='/community' element={<Community />}></Route>
          <Route path='/group' element={<Group />}>
            <Route path=':groupId'></Route>
          </Route>
          <Route path='/login' element={<LoginRegister />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
/*test doang xixixi */

export default App
