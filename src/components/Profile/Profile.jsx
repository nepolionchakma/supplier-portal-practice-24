import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import SignUp from "./SignUp"
import { useMyContext } from "@/Supabase/MyContext";
import conf from "@/Supabase/conf";
function Profile() {
  const consfValue = String(conf.supabase_url + '&' + conf.supabase_key)
  const consfValueSlice = consfValue.slice(0, 10)
  return (
    <div className="w-[80vw]">

      <div className="flex gap-4">
        <div className="border p-4 m-8 w-1/6">
          <h5>Name</h5>
          <h5>Email</h5>
          <h5>UserName</h5>
          <h5>Jobtitle</h5>
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
        <SignUp />
      </div>

    </div>
  )
}
export default Profile