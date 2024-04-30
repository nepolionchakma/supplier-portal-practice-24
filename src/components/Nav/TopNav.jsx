import { Link, NavLink } from "react-router-dom"
import { FiAlertCircle, FiBell, FiChevronDown, FiCreditCard, FiGithub, FiHome, FiList, FiMessageSquare } from "react-icons/fi";
import { MyContextProvider, supabase, useMyContext } from "@/Supabase/MyContext";
import LogIn from "../Profile/LogIn";
supabase
function TopNav() {
  const { session } = useMyContext()
  return (
    <div className="flex flex-row-reverse h-[9vh] w-full shadow-lg items-center px-4 py-6">
      <nav>
        <div className="flex gap-8 text-2xl p-4 items-center mr-10">
          <NavLink to='/'><FiHome /></NavLink>
          <NavLink to='/'><FiBell /></NavLink>
          <NavLink to='/'><FiList /></NavLink>
          <NavLink to='/notifications'><FiMessageSquare /></NavLink>
          <NavLink to='/'><FiGithub /></NavLink>
          {
            session ? <Link onClick={() => supabase.auth.signOut()}>LogOut</Link> : <Link to='login'>LogIn</Link>
          }
        </div>
      </nav>
    </div>
  )
}
export default TopNav