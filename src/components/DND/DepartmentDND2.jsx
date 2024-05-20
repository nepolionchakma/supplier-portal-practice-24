import { useAuthContext } from "@/Supabase/AuthContext"
import { useState } from "react"
import { FiMaximize, FiMinimize, FiMinimize2, FiMinus, FiX } from "react-icons/fi"


function DepartmentDND2() {
  const { allDepartmentData, allEmployeesData } = useAuthContext()
  const [department_id, setDepartment_id] = useState('')
  const [department_name, setDepartment_name] = useState('')
  console.log(allDepartmentData)
  const handleUpdateDepartment = (e) => {
    e.preventDefault()
    console.log(department_id, department_name)
  }
  return (
    <div>
      <div className="flex gap-5 w-full p-4">
        <div className="w-[30%]  p-3 rounded">
          {/* left Side  */}
          <div className="flex flex-col gap-2 ">
            {
              allDepartmentData?.map((i) => (
                <div className="bg-slate-200 rounded p-3 hover:bg-slate-100 " key={i.department_id}>{i.department_name}</div>
              ), [])
            }
          </div>
        </div>
        {/* right side  */}
        <div className="w-[65%] h-[89vh] overflow-y-scroll scroll-smooth  border-slate-500 bg-slate-200 rounded border-2">
          <hr className="borde   border-slate-700 " />
          <div className="text-center my-3 sticky top-0 p-2 overflow-hidden z-11 bg-slate-200">
            <h4>Department</h4>
          </div>
          <hr className="border-3mb-3 border-slate-700 " />
          <div className="p-9">
            <form onSubmit={handleUpdateDepartment}>
              <div className="flex flex-col gap-2">
                <div className="">
                  <label htmlFor="dp_id">Department Id : </label>
                  <input className="rounded  " value={department_id} onChange={(e) => { setDepartment_id(e.target.value) }} type="text" />
                </div>
                <div className="">
                  <label htmlFor="dp_name">Department Name : </label>
                  <input className="rounded  " value={department_name} onChange={(e) => { setDepartment_name(e.target.value) }} type="text" />
                </div>
              </div>
            </form>
          </div>
          {/* <hr className="border-3 border-slate-700 " /> */}
          <div className="sticky top-10 p-9 overflow-hidden z-11 bg-slate-200">

            <div className="border-2 p-4 rounded bg-slate-400 border-slate-950 gap-4 flex flex-col">
              <div className="">
                <div className="flex flex-row-reverse gap-3 ">
                  <div>  <FiX /> </div>
                  <div><FiMinus /></div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex gap-3">
                  <label htmlFor="">Department Name </label>
                  <select name="" id="" className="rounded">
                    <option value="" >Production</option>
                  </select>
                </div>
              </div>
            </div>
            <hr className="borde mt-3 r-3 border-slate-700 " />
            <div className="text-center my-3">
              <h4>Employees Data</h4>
            </div>
            <hr className="border-3 border-slate-700 " />
          </div>

          <div className=" ">
            <div className="p-9">
              {
                allEmployeesData?.map((i) => (
                  <div key={i.employee_id} className="border-2 p-4 my-6 rounded bg-slate-400 border-slate-950 gap-9 flex flex-col">
                    <div className="">
                      <div className="flex flex-row-reverse gap-3 ">
                        <div>  <FiX /> </div>
                        <div><FiMinus /></div>
                      </div>
                    </div>

                    <div className=" flex flex-col gap-3">
                      <div className=" ">
                        <div className="flex gap-3">
                          <label htmlFor="">Employee Name </label>
                          <div className="  w-[30%]">
                            <select name="" id="" className="rounded w-full">
                              <option value="" >{i.employee_name}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="flex gap-5">
                          <div className="flex flex-col gap-3 w-[20%]">
                            <label htmlFor="">Employee Id</label>
                            <select name="" id="" className="rounded ">
                              <option value="">{i.employee_id}</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-3 w-[30%]">
                            <label htmlFor="">Job Title</label>
                            <select name="" id="" className="rounded">
                              <option value="">{i.job_title}</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-3 w-[30%]">
                            <label htmlFor="">Email</label>
                            <select name="" id="" className="rounded ">
                              <option value="">{i.email}</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-3 w-[20%]">
                            <label htmlFor="">Department Id</label>
                            <select name="" id="" className="rounded ">
                              <option value="">{i.department_id}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DepartmentDND2