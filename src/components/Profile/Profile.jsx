import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import SignUp from "./SignUp"
import { useAuthContext } from "@/Supabase/AuthContext";
import conf from "@/Supabase/conf";
function Profile() {
  const consfValue = String(conf.supabase_url + '&' + conf.supabase_key)
  const consfValueSlice = consfValue.slice(0, 10)
  const { session } = useAuthContext()

  return (
    <div className="w-[80vw]">

      <div className="flex gap-4">
        <div className="border p-4 m-8 w-1/6">
          <h5>Name:{session?.user.user_metadata.first_name} {session?.user.user_metadata.last_name}</h5>
          <h5>Email:{session?.user.user_metadata.email}</h5>
          <h5>UserName:{session?.user.user_metadata.user_name}</h5>
          <h5>Jobtitle:{session?.user.user_metadata.job_title}</h5>
        </div>
        <div className="border p-3 rounded w-32 h-44 mt-8">
          <div className=""  >
            <h2>Site QR Code</h2>
            <QRCode
              size={256}
              style={{ height: "auto", width: "100%" }}
              value={String(conf.supabase_url + '&' + conf.supabase_key)}
              viewBox={`0 0 256 256`}
            />
            <p className="text-slate-400 w-1/2">{consfValueSlice}</p>
          </div>
        </div>
        <div className="border p-3 rounded w-32 h-44 mt-8">
          <div className=""  >
            <h2>LogIn</h2>
            <QRCode
              size={256}
              style={{ height: "auto", width: "100%" }}
              value={String(conf.supabase_url + '&' + conf.supabase_key)}
              viewBox={`0 0 256 256`}
            />
            <p className="text-slate-400 w-1/2">{consfValueSlice}</p>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Profile