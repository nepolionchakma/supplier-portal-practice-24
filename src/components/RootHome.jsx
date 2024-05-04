import { useAuthContext } from "@/Supabase/AuthContext"
import LeftSideNav from "./Nav/LeftSideNav"
import TopNav from "./Nav/TopNav"
import LogIn from "./Profile/LogIn"

function RootHome() {
  const { session, isLoading } = useAuthContext()
  if (isLoading) return (
    <div
      className='flex items-center justify-center'>
      <img src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt="" />
    </div>
  )
  if (session) return (
    <div >
      <TopNav />
      <LeftSideNav />

    </div>
  )
  return <LogIn />
}
export default RootHome