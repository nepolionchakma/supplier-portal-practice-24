import { useEffect, useState } from "react"
import { supabase } from "@/Supabase/AuthContext"

function StudentsDND() {
  const [students, setStudents] = useState([])
  const [newStudents, setNewStudents] = useState(students)

  console.log(newStudents)
  useEffect(() => {
    const fetchStudents = async () => {

      let { data: students, error } = await supabase
        .from('students')
        .select('*')
      if (students) {
        setStudents(students)
      } else (
        console.log(error)
      )

    }
    fetchStudents()

  }, [])

  return (
    <div>StudentsDND</div>
  )
}
export default StudentsDND