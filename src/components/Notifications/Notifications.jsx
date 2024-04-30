import { FiDownloadCloud, FiDribbble, FiInbox, FiList, FiMenu, FiSend, FiUser, FiUserPlus, FiUsers, FiX } from 'react-icons/fi';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
function Notifications() {
  const [isActive, setIsActive] = useState(0)

  const navLinks = [
    {
      name: 'Inbox',
      icon: <FiInbox className='text-2xl' />,
      link: 'inbox'
    },
    {
      name: 'Send',
      icon: <FiSend className='text-2xl' />,
      link: 'send'
    },
    {
      name: 'Draft',
      icon: <FiDownloadCloud className='text-2xl' />,
      link: 'draft'
    }
  ]
  return (
    <div className='max-w-full'>
      <h4 className='text-center'>Notifications</h4>
      <div className="flex gap-4 p-4">
        <div className='flex flex-col gap-4'>
          {
            navLinks.map((item, index) => (
              <NavLink
                to={item.link}
                key={index}
                onClick={() => setIsActive(index)}
                className={'mix-w-min text-slate-600 font-bold hover:bg-slate-200 px-8 py-3 rounded transition-all duration-500 shadow ' + (isActive == index ? 'bg-slate-200 text-slate-900 font-bold' : '')}
              >
                <div className='flex gap-3 items-center'>{item.icon} {item.name}</div>
              </NavLink>
            ))
          }
        </div>
        <div>
          <Outlet />
        </div>

        {/* <div className=''>
          <div className={tabIndex == 0 ? 'visible' : 'hidden'}>hello1</div>
          <div className={tabIndex == 1 ? 'visible' : 'hidden'}>hello2</div>
          <div className={tabIndex == 2 ? 'visible' : 'hidden'}>hello3</div>
        </div> */}
      </div>
    </div>
  )
}
export default Notifications