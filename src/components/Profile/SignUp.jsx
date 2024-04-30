import { useMyContext } from "@/Supabase/MyContext"
import { useState } from "react";

function SignUp() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signUp, error } = useMyContext();
  const handleSignUp = (e) => {
    e.preventDefault()
    signUp(email, password, fullName)
  }
  return (
    <div className="mx-auto w-2/2 bg-slate-400 p-6 rounded">
      <form onSubmit={handleSignUp}>
        <label htmlFor="full_name">Full Name</label>
        <br />
        <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" id="full_name" name="full_name" placeholder="Full Name" className="p-2 rounded ml-2  focus:text-orange-600 bg-slate-100" />
        <div className="my-4">
          <label htmlFor="email">Email</label>
          <br />
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Email" className="p-2 rounded ml-2  focus:text-orange-600 bg-slate-100" />
        </div>
        <label htmlFor="password" >Password</label>
        <br />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="Password" className="p-2 rounded ml-2  focus:text-orange-600 bg-slate-100" />
        <br />
        <button className="bg-emerald-500 px-6 py-2 my-4 text-white font-bold">SignUp</button>
        {
          <p>{error}</p>
        }
      </form>
    </div>
  )
}
export default SignUp