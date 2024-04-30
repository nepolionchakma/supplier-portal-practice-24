import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootHome from "./components/RootHome"
import HomePortal from "./components/HomePortal/HomePortal"
import Notifications from "./components/Notifications/Notifications"
import Inbox from "./components/Notifications/Inbox"
import Draft from "./components/Notifications/Draft"
import Send from "./components/Notifications/Send"
import Items from "./components/Items/Items"
import Profile from "./components/Profile/Profile"
import AllUsers from "./components/UserManagement/AllUsers"
import EditUser from "./components/UserManagement/EditUser/EditUser"
import AddUser from "./components/UserManagement/AddUser/AddUser"
import Error from "./components/Error/Error"

function LayOut() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootHome />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <HomePortal />
        },

        {
          path: '/allusers',
          element: <AllUsers />,
        },
        {
          path: '/adduser',
          element: <AddUser />,
        },
        {
          path: '/allusers/edituser/:id',
          element: <EditUser />
        },
        {
          path: '/items',
          element: <Items />
        },
        {
          path: '/profile',
          element: <Profile />
        },
        {
          path: '/notifications',
          element: <Notifications />,
          children: [
            {
              path: '',
              element: <Inbox />
            },
            {
              path: 'inbox',
              element: <Inbox />
            },
            {
              path: 'send',
              element: <Send />
            },
            {
              path: 'draft',
              element: <Draft />
            },
          ]
        },
      ]
    },
    {
      path: '*',
      element: <Error />
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}
export default LayOut