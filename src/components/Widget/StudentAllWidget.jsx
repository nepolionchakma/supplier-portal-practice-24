import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { FiEdit, FiMinimize, FiTrash } from "react-icons/fi";

const StudentAllWidget = ({ student, index, setStudents, students }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: student.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const onchangeInputWidget = (id, field, value) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, [field]: value } : student
    ));
  };

  const toggleMinimize = async (id) => {
    const updatedIs_minimized = students.map(student =>
      student.id === id ? { ...student, is_minimized: !student.is_minimized } : student
    );
    setStudents(updatedIs_minimized);
    // Send is_minimized value to Supabase table
    // const { data, error } = await supabase
    //   .from('student_widget_attributes')
    //   .upsert(updatedIs_minimized);
    // if (error) {
    //   console.error('Error updating student_widget_attributes:', error);
    // }
  };

  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id != id))
  }
  const handleChange = (index, field, value) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = value;
    setStudents(updatedStudents);

  };
  return (
    <div
      style={style}
    >
      <div
        className={`border-2 p-4 pt-0 shadow-xl ${student?.is_minimized ? 'w-[50%] p-2' : 'w-full'} mx-auto touch-none duration-700 rounded bg-slate-400 hover:shadow-green-600 `}
      >
        <div
          className="cursor-grab py-4"
          ref={setNodeRef}
          {...attributes}
          {...listeners}>
        </div>
        <div className="flex flex-row-reverse gap-2">
          <button onClick={() => handleDelete(student.id)} className="hover:bg-red-500 p-2 rounded-full"><FiTrash /></button>
          <button onClick={() => toggleMinimize(student.id)} className="hover:bg-green-500 p-2 rounded-full"><FiMinimize /></button>
        </div>
        <div className=" ">
          <div className="flex gap-3 justify-center">
            <div className="flex flex-col items-center">
              <label htmlFor="">Student Name </label>
              <div className="  px-3 py-1 rounded">
                <input className="px-2 rounded" type="text" value={student.name} onChange={e => onchangeInputWidget(student.id, 'name', e.target.value)} />
              </div>
            </div>
            <div className={`flex flex-col items-center ${student?.is_minimized ? 'hidden' : 'visible  duration-500'}`}>
              <label htmlFor="">Department Name </label>
              <div className="  px-3 py-1 rounded">
                <input className="px-2 rounded" type="text" value={student.department} onChange={e => onchangeInputWidget(student.id, 'department', e.target.value)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default StudentAllWidget