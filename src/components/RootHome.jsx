import { useMyContext } from "@/Supabase/MyContext"
import LeftSideNav from "./Nav/LeftSideNav"
import TopNav from "./Nav/TopNav"
import LogIn from "./Profile/LogIn"

function RootHome() {
  const { session } = useMyContext()
  return (
    <div>
      {
        session
          ? <div>
            <TopNav />
            <LeftSideNav />

          </div>
          :
          <LogIn />
      }

    </div>
  )
}
export default RootHome