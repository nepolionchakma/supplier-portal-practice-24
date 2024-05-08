import { Link, NavLink } from "react-router-dom"
import { FiAlertCircle, FiBell, FiChevronDown, FiCreditCard, FiGithub, FiHome, FiList, FiMessageSquare } from "react-icons/fi";
import { AuthContextProvider, supabase, useAuthContext } from "@/Supabase/AuthContext";
import LogIn from "../Profile/LogIn";
supabase
function TopNav() {
  const { session } = useAuthContext()
  return (
    <div className="flex flex-row-reverse h-[9vh] w-full shadow-lg items-center px-4 py-6">
      <nav>
        <div className="flex gap-8 text-2xl p-4 items-center mr-10">
          <NavLink to='/'><FiHome /></NavLink>
          <NavLink to='/bell'><FiBell /></NavLink>
          <NavLink to='/items'><FiList /></NavLink>
          <NavLink to='/notifications'><FiMessageSquare /></NavLink>
          <NavLink to='/profile'><FiGithub /></NavLink>
          {
            session && <Link onClick={() => supabase.auth.signOut()}>LogOut</Link>
          }
        </div>
      </nav>
    </div>
  )
}
export default TopNav