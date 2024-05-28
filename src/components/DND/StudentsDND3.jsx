import React, { useState, useEffect } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { supabase } from '@/Supabase/AuthContext';
import { v4 as uuidv4 } from 'uuid';

// Sortable Item component
function SortableItem({ id, student, department }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="p-4 border rounded-md bg-white shadow mb-2">
      <div>Student Name: {student}</div>
      <div>Department: {department}</div>
    </div>
  );
}

export default function StudentsDND2() {
  const [leftWidgets, setLeftWidgets] = useState([{ id: uuidv4(), student: '', department: '' }]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const { data, error } = await supabase.from('students').select('*');
      if (error) {
        console.error('Error fetching students:', error);
      } else {
        setStudents(data);
      }
    };
    fetchStudents();
  }, []);

  // Inside handleDragEnd function

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    if (leftWidgets.find(widget => widget.id === active.id) && !students.find(widget => widget.id === active.id)) {
      // Remove the dragged widget from the left side
      setLeftWidgets(leftWidgets.filter(widget => widget.id !== active.id));
      // Add the empty widget to the left side
      setLeftWidgets(prevState => ([...prevState, { id: uuidv4(), student: '', department: '' }]));
      // Move the dragged widget to the right side
      setStudents(prevState => [{ id: active.id, student: '', department: '' }, ...prevState]);
    } else if (students.find(widget => widget.id === active.id) && !leftWidgets.find(widget => widget.id === active.id)) {
      // Reorder the widgets within the right side
      const newIndex = students.findIndex(widget => widget.id === over.id);
      if (newIndex !== students.length - 1) { // Prevent dropping at the bottom
        setStudents(arrayMove(students, students.findIndex(widget => widget.id === active.id), newIndex));
      }
    }
  };


  return (
    <div className="flex gap-4 p-4">
      <div className="w-1/2 bg-gray-100 p-4 rounded-md">
        <h2 className="text-xl mb-4">Left Side</h2>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={leftWidgets} strategy={verticalListSortingStrategy}>
            {leftWidgets.map(widget => (
              <SortableItem key={widget.id} id={widget.id} student={widget.student} department={widget.department} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
      <div className="w-1/2 bg-gray-100 p-4 rounded-md">
        <h2 className="text-xl mb-4">Right Side</h2>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={students} strategy={verticalListSortingStrategy}>
            {students.map(widget => (
              <SortableItem key={widget.id} id={widget.id} student={widget.student} department={widget.department} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
