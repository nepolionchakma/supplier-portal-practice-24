import { useEffect, useState } from "react"
import { supabase } from "@/Supabase/AuthContext"
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core"
import { SortableContext, arrayMove, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import StudentAllWidget from "../Widget/StudentAllWidget"
import { FiPlus, FiSave } from "react-icons/fi"
import StudentAddWidget from "../Widget/StudentAddWidget"
const StudentsDND = () => {

  const [students, setStudents] = useState([]);
  const addWidget = () => {
    const newWidget = { id: students.length ? students[students.length - 1].id + 1 : 1, name: '', department: '' };
    setStudents([...students, newWidget]);
  };
  // console.log(students)
  useEffect(() => {
    const studentData = async () => {
      let { data, error } = await supabase
        .from('students')
        .select('*')
        .order('id', { ascending: true })
      // console.log(data)
      if (students) setStudents(data.map(item => ({ ...item, fromSupabase: true })));
    }
    studentData()
  }, [])
  console.log(students)
  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log(active.id, 'active id')
    console.log(over.id, 'over id')

    if (active.id !== over.id) {
      setStudents((students) => {
        const oldIndex = students.findIndex((student) => student.id === active.id);
        const newIndex = students.findIndex((student) => student.id === over.id);

        return arrayMove(students, oldIndex, newIndex);
      });
    }
  };

  // ----------------Drag And Drop End
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 w-[20%]">
        <button className="p-3  rounded-full bg-slate-500 hover:bg-green-500 shadow-md shadow-red-400">
          <FiSave className="text-2xl " />
        </button>
        <button onClick={addWidget} className="p-3  rounded-full bg-slate-500 hover:bg-green-500 shadow-md shadow-blue-400">
          <FiPlus className="text-2xl " />
        </button>
      </div>
      <div
        className=" w-[70%] mx-auto"
      >
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          <div className="gap-6 flex flex-col">
            <SortableContext
              items={students}
              strategy={verticalListSortingStrategy}
            >
              {
                students.map((student, index) => (

                  <StudentAllWidget
                    key={student.id}
                    index={index}
                    student={student}
                    students={students}
                    setStudents={setStudents}
                  />
                ))
              }


            </SortableContext>
          </div>
        </DndContext>
      </div>

    </div>
  )
}
export default StudentsDND