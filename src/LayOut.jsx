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
import Employees from "./components/Employees/Employees"
import Error from "./components/Error/Error"
import InviteUser from "./components/UserManagement/InviteUser/InviteUser"
import LogIn from "./components/Profile/LogIn"
import ConfirmAccount from "./components/ConfirmAccount/ConfirmAccount"
import Update from "./components/Employees/Update/Update"
import AddRow from "./components/Employees/AddRow/AddRow"
import AccessToken from "./components/QRCode/AccessToken"
import OrgId from "./components/QRCode/OrgId"
import AllDepartment from "./components/Departments/AllDepartment"
import AddDepartment from "./components/Departments/AddDepartment"
import UpdateDepartment from "./components/Departments/UpdateDepartment"
import Bell from "./components/Bell/Bell"
import SignUp from "./components/Profile/SignUp"
import MasterDetails1 from "./components/MasterDetails/MasterDetails1"
import MasterDetails2 from "./components/MasterDetails/MasterDetails2"

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
          path: '/inviteuser',
          element: <InviteUser />
        },
        {
          path: '/items',
          element: <Items />
        },
        {
          path: '/bell',
          element: <Bell />
        },
        {
          path: '/employees',
          element: <Employees />
        },
        {
          path: '/adddata',
          element: <AddRow />
        },
        {
          path: '/employees/edit/:employee_id',
          element: <Update />
        },
        {
          path: '/alldepartment',
          element: <AllDepartment />
        },
        {
          path: '/adddepartment',
          element: <AddDepartment />
        },
        {
          path: '/masterdetails1',
          element: <MasterDetails1 />
        },
        {
          path: '/masterdetails2',
          element: <MasterDetails2 />
        },
        {
          path: '/alldepartment/edit/:id',
          element: <UpdateDepartment />
        },
        {
          path: '/orgid',
          element: <OrgId />
        },
        {
          path: '/accesstoken',
          element: <AccessToken />
        },
        {
          path: '/profile',
          element: <Profile />
        },
        {
          path: '/profile/update/:id',
          element: <Profile />
        },

        {
          path: '/login',
          element: <LogIn />
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
      path: '/confirmaccount',
      element: <ConfirmAccount />,
    },
    {
      path: '/accountconfirm',
      element: <SignUp />,
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}
export default LayOut