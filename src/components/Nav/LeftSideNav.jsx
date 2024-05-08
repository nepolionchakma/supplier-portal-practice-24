import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Logo from '../../../images/Supplier-Portal.jpg'
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FiCode, FiCrosshair, FiDatabase, FiDivideCircle, FiFile, FiHardDrive, FiInfo, FiList, FiMenu, FiPlus, FiSend, FiServer, FiUser, FiUserPlus, FiUsers, FiX } from 'react-icons/fi';
function LeftSideNav() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="p-4 h-auto  ">
      <nav className='flex gap-4'>
        <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}  >

          <Sidebar collapsed={collapsed} transitionDuration={1000}>
            <div>
              <img className='' src={Logo} alt="" />
            </div>

            <main
              className='mx-auto rounded w-20 m-4 flex justify-center cursor-pointer'
              onClick={() => setCollapsed(!collapsed)}
            >
              <div className='border p-2'>
                <button>
                  {
                    collapsed ? <FiX /> : <FiMenu />
                  }
                </button>
              </div>
            </main>

            <Menu
              menuItemStyles={{
                button: ({ level, active, disabled }) => {
                  // only apply styles on first level elements of the tree
                  if (level === 0)
                    return {
                      // color: disabled ? '#f5d9ff' : '#d359ff',
                      backgroundColor: active ? '#eecef9' : undefined,
                    };
                },
              }}
            >
              <SubMenu label="User Menagement" icon={<FiUserPlus className='text-2xl' />}>
                <MenuItem
                  component={<NavLink to="/adduser" />}
                  icon={<FiUserPlus className='text-2xl' />}> Add User </MenuItem>
                <MenuItem
                  component={<NavLink to="/allusers" />}
                  icon={<FiUsers className='text-2xl' />}> All Users </MenuItem>
                <MenuItem component={<NavLink to="/inviteuser" />}
                  icon={<FiSend className='text-2xl' />}> Invite a User </MenuItem>
              </SubMenu>

              <SubMenu label="Employees" icon={<FiDatabase className='text-2xl' />}>
                <MenuItem
                  component={<NavLink to="/adddata" />}
                  icon={<FiPlus className='text-2xl' />}> Add</MenuItem>
                <MenuItem
                  component={<NavLink to="employees" />}
                  icon={<FiFile className='text-2xl' />}>All Data</MenuItem>
              </SubMenu>
              <SubMenu label="Departments" icon={<FiHardDrive className='text-2xl' />}>
                <MenuItem
                  component={<NavLink to="/adddepartment" />}
                  icon={<FiPlus className='text-2xl' />}> Add Department</MenuItem>
                <MenuItem
                  component={<NavLink to="alldepartment" />}
                  icon={<FiFile className='text-2xl' />}>All Department</MenuItem>
              </SubMenu>

              <SubMenu label="QR Code" icon={<FiCode className='text-2xl' />}>
                <MenuItem
                  component={<NavLink to="/orgid" />}
                  icon={<FiInfo className='text-2xl' />}> Org Id </MenuItem>
                <MenuItem
                  component={<NavLink to="accesstoken" />}
                  icon={<FiServer className='text-2xl' />}>Access Token</MenuItem>
              </SubMenu>

              <MenuItem
                component={<NavLink to="items" />}
                icon={<FiList className='text-2xl' />}> Items </MenuItem>

              <MenuItem
                component={<NavLink to="profile" />}
                icon={<FiUser className='text-2xl' />}> Profiles </MenuItem>
            </Menu>
          </Sidebar>

        </div>
        <div className={'  ' + (!collapsed ? 'w-[81%]' : 'w-[99%]')}>
          <Outlet />
        </div>
      </nav>
    </div>
  )
}
export default LeftSideNav