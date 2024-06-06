import { Link, NavLink } from "react-router-dom"
import { FiAlertCircle, FiBell, FiChevronDown, FiCreditCard, FiGithub, FiHome, FiList, FiMessageCircle, FiMessageSquare } from "react-icons/fi";
import { AuthContextProvider, supabase, useAuthContext } from "@/Supabase/AuthContext";
import LogIn from "../Profile/LogIn";

import Logo from '../../../images/Supplier-Portal.jpg'
import { useState } from "react";
function TopNav() {
  const { session } = useAuthContext()
  const [activeId, setActiveId] = useState(0)
  const menus = [
    { name: 'Home', path: '/', icon: <FiHome />, dis: 'translate-x-0' },
    {
      name: 'Home', path: '/bell', icon: <FiBell />, dis: 'translate-x-16'
    },
    {
      name: 'Home', path: '/items', icon: <FiList />, dis: 'translate-x-32'
    },
    {
      name: 'Home', path: '/notifications', icon: <FiMessageSquare />, dis: 'translate-x-48'
    },
    {
      name: 'Home', path: '/profile', icon: <FiGithub />, dis: 'translate-x-64'
    }
  ]
  const style1 = {
    boxShadow: "-12px 6px 0 0 rgb(125 211 252 / var(--tw-bg-opacity))"
  }
  const style2 = {
    boxShadow: " 12px 6px 0 0 rgb(125 211 252 / var(--tw-bg-opacity))"
  }
  return (
    <div className="shadow-lg items-center sticky top-0 mb-4 h-[70px] bg-sky-300 z-[999999999]">
      <div className="flex justify-between bg-white ">
        <div className=" ">
          <NavLink to='/'> <img className='w-[90px] p-2' src={Logo} alt="" /></NavLink>

        </div>
        <nav className="flex relative">
          <span className={`bg-sky-300 flex gap-8 mt-4 border-4 border-sky-300 absolute h-[52px] w-12 duration-300  rounded-full ${menus[activeId]?.dis}`}>
            <span className="w-6 h-6 absolute bg-transparent top-[20px] -right-7 rounded-bl-[16px] myBoxShadow1" style={style1}></span>
            <span className="w-6 h-6 absolute bg-transparent top-[19.9px] -left-7 rounded-br-[16px] myBoxShadow2" style={style2}></span>
          </span>
          <div className="flex text-2xl p-3 items-center mr-10">
            {
              menus.map((m, i) => (
                <NavLink key={i} to={m.path} className={`${activeId === i && "-mb-5 text-white"} z-40 w-16 `} onClick={() => setActiveId(i)}>
                  {m.icon}
                </NavLink>
              ))
            }
            {/* <NavLink to='/'><FiHome className="hover:text-green-600 duration-500" /></NavLink>
          <NavLink to='/bell'><FiBell className="hover:text-green-600 duration-500" /></NavLink>
          <NavLink to='/items'><FiList className="hover:text-green-600 duration-500" /></NavLink>
          <NavLink to='/notifications'><FiMessageSquare className="hover:text-green-600 duration-500" /></NavLink>
          <NavLink to='/profile'><FiGithub className="hover:text-green-600 duration-500" /></NavLink> */}
            {
              session && <Link onClick={() => supabase.auth.signOut()} className="hover:text-red-600 duration-500">LogOut</Link>
            }
          </div>
        </nav>
      </div>
    </div>
  )
}
export default TopNav