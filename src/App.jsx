import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './pages/Home.jsx';
import Venues from './pages/Venues.jsx';
import VenueDetail from './components/venue-detail/VenueDetail.jsx';
import Community from './pages/Community.jsx';
import Group from './pages/Group.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import GroupDetail from './components/group-detail/GroupDetail.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Payment from './pages/Payment/Payment.jsx';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
//import Admin from './pages/Admin.jsx';


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
        path: '/venues/:venueId',
        element: <VenueDetail />,
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
        path: '/profile/:profileId',
        element: <Profile />,
      },
      {
        path: '/payment',
        element: <Payment />,
      }
    ]
  }

])

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}


export default App
