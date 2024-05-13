import { Link, NavLink } from "react-router-dom"
import { FiAlertCircle, FiBell, FiChevronDown, FiCreditCard, FiGithub, FiHome, FiList, FiMessageSquare } from "react-icons/fi";
import { AuthContextProvider, supabase, useAuthContext } from "@/Supabase/AuthContext";
import LogIn from "../Profile/LogIn";

import Logo from '../../../images/Supplier-Portal.jpg'
function TopNav() {
  const { session } = useAuthContext()
  return (
    <div className="flex justify-between shadow-lg items-center sticky top-0 bg-white z-20">
      <div className=" ">
        <NavLink to='/'> <img className='w-[90px] p-2' src={Logo} alt="" /></NavLink>

      </div>
      <nav>
        <div className="flex gap-8 text-2xl p-4 items-center mr-10">
          <NavLink to='/'><FiHome className="hover:text-green-600 duration-500" /></NavLink>
          <NavLink to='/bell'><FiBell className="hover:text-green-600 duration-500" /></NavLink>
          <NavLink to='/items'><FiList className="hover:text-green-600 duration-500" /></NavLink>
          <NavLink to='/notifications'><FiMessageSquare className="hover:text-green-600 duration-500" /></NavLink>
          <NavLink to='/profile'><FiGithub className="hover:text-green-600 duration-500" /></NavLink>
          {
            session && <Link onClick={() => supabase.auth.signOut()} className="hover:text-red-600 duration-500">LogOut</Link>
          }
        </div>
      </nav>
    </div>
  )
}
export default TopNav