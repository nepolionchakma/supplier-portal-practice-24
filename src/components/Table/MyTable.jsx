import { useMyContext } from "@/Supabase/MyContext"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FilePenIcon, FilePenLineIcon } from "lucide-react";

import { FiPenTool, FiTrash } from 'react-icons/fi';
import { Link } from "react-router-dom";

function MyTable() {
  const { data, isLoading, handleDelete } = useMyContext()
  const handleDeleteItem = (id) => {
    handleDelete(id)
  }
  return (
    <>
      <div className="border">
        {
          isLoading ?
            <div className="w-full h-full overflow-hidden flex items-center justify-center transition-all duration-700">
              <img src='https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif' alt="" />
            </div>
            :
            <Table className='border-0 m-5 w-[95%]'>
              <TableCaption> </TableCaption>
              <TableHeader>

                <TableRow>
                  <TableHead>ID</TableHead>
                  {/* <TableHead className="w-[10px]">Email</TableHead> */}
                  {/* <TableHead>User Id</TableHead> */}
                  <TableHead>User Name</TableHead>
                  <TableHead>First Name</TableHead>
                  <TableHead>Middle Name</TableHead>
                  <TableHead>Last Name</TableHead>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Organization Type</TableHead>
                  <TableHead>Organization Id</TableHead>
                  <TableHead>Organization ID Column Name</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.map((i) => (
                  <TableRow key={i.id}>
                    <TableCell>{i.id}</TableCell>
                    {/* <TableCell className="w-[10px]">{i.email}</TableCell> */}
                    {/* <TableCell >{i.user_id}</TableCell> */}
                    <TableCell >{i.user_name}</TableCell>
                    <TableCell >{i.first_name}</TableCell>
                    <TableCell >{i.middle_name}</TableCell>
                    <TableCell >{i.last_name}</TableCell>
                    <TableCell >{i.job_title}</TableCell>
                    <TableCell >{i.org_type}</TableCell>
                    <TableCell >{i.org_id}</TableCell>
                    <TableCell >{i.org_id_column_name}</TableCell>
                    <TableCell>
                      <div className='flex items-center gap-2 cursor-pointer'>
                        <Link className="p-1 rounded-full border-2 bg-green-400 text-xl" to={'/allusers/edituser/' + i.id}>{<FilePenLineIcon />}</Link>
                        <button className="p-1 rounded-full border-2 bg-red-400 text-xl" onClick={() => handleDeleteItem(i.id)}>{<FiTrash />}</button>

                      </div></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

        }
      </div>
    </>
  )
}
export default MyTable