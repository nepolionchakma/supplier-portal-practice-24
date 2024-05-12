{/* search by name  */ }
{
  searchEmployeesNameData != '' && <TableBody>
    {searchEmployeesData?.map((i) => (
      <TableRow key={i.employee_id}>
        <TableCell><input type="checkbox" name="" id="" /></TableCell>
        <TableCell>{i.employee_id}</TableCell>
        <TableCell>{i.employee_name}</TableCell>
        <TableCell >{i.job_title}</TableCell>
        <TableCell >{i.first_name}</TableCell>
        <TableCell >{i.last_name}</TableCell>
        <TableCell >{i.email}</TableCell>
        <TableCell>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Link className="p-1 rounded-full border-2 bg-green-400 text-xl" to={'/employees/edit/' + i.employee_id}>{<FilePenLineIcon />}</Link>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="p-1 rounded-full border-2 bg-red-400 text-xl" >{<FiTrash />}</button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Really Want To <span className="text-red-600">Delete</span> ?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently <span className="text-red-600">delete</span> from
                    database and <span className="text-red-600">remove</span> your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className='bg-green-700 text-white'>Cancel</AlertDialogCancel>
                  <AlertDialogAction className='bg-red-600' onClick={() => handleDeleteDepartmentItem(i.employee_id, 'employees')}>Confirm</AlertDialogAction>

                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

          </div></TableCell>
      </TableRow>
    ))
      // .sort((a, b) => a.user_name.localeCompare(b.user_name))
    }
  </TableBody>
}
{
  searchEmployeesNameDataFilteredDepartment != '' && <TableBody>
    {searchEmployeesDataByFilteredDepartment?.map((i) => (
      <TableRow key={i.employee_id}>
        <TableCell><input type="checkbox" name="" id="" /></TableCell>
        <TableCell>{i.employee_id}</TableCell>
        <TableCell>{i.employee_name}</TableCell>
        <TableCell >{i.job_title}</TableCell>
        <TableCell >{i.first_name}</TableCell>
        <TableCell >{i.last_name}</TableCell>
        <TableCell >{i.email}</TableCell>
        <TableCell>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Link className="p-1 rounded-full border-2 bg-green-400 text-xl" to={'/employees/edit/' + i.employee_id}>{<FilePenLineIcon />}</Link>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="p-1 rounded-full border-2 bg-red-400 text-xl" >{<FiTrash />}</button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Really Want To <span className="text-red-600">Delete</span> ?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently <span className="text-red-600">delete</span> from
                    database and <span className="text-red-600">remove</span> your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className='bg-green-700 text-white'>Cancel</AlertDialogCancel>
                  <AlertDialogAction className='bg-red-600' onClick={() => handleDeleteDepartmentItem(i.employee_id, 'employees')}>Confirm</AlertDialogAction>

                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

          </div></TableCell>
      </TableRow>
    ))
      // .sort((a, b) => a.user_name.localeCompare(b.user_name))
    }
  </TableBody>
}
{/* search by id  */ }
{
  searchEmployeesNameDataFilteredDepartment == '' &&
    searchValueById != '' && <TableBody>
      {searchEmployeesData?.map((i) => (
        <TableRow key={i.employee_id}>
          <TableCell><input type="checkbox" name="" id="" /></TableCell>
          <TableCell>{i.employee_id}</TableCell>
          <TableCell>{i.employee_name}</TableCell>
          <TableCell >{i.job_title}</TableCell>
          <TableCell >{i.first_name}</TableCell>
          <TableCell >{i.last_name}</TableCell>
          <TableCell >{i.email}</TableCell>
          <TableCell>
            <div className='flex items-center gap-2 cursor-pointer'>
              <Link className="p-1 rounded-full border-2 bg-green-400 text-xl" to={'/employees/edit/' + i.employee_id}>{<FilePenLineIcon />}</Link>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="p-1 rounded-full border-2 bg-red-400 text-xl" >{<FiTrash />}</button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Really Want To <span className="text-red-600">Delete</span> ?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently <span className="text-red-600">delete</span> from
                      database and <span className="text-red-600">remove</span> your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className='bg-green-700 text-white'>Cancel</AlertDialogCancel>
                    <AlertDialogAction className='bg-red-600' onClick={() => handleDeleteDepartmentItem(i.employee_id, 'employees')}>Confirm</AlertDialogAction>

                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

            </div></TableCell>
        </TableRow>
      ))
        // .sort((a, b) => a.user_name.localeCompare(b.user_name))
      }
    </TableBody>
}