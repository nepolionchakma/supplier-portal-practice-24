import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

const StudentAddWidget = ({ i, widget, widgets, setWidgets }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: widget });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  const onchangeInputWidget = (id, field, value) => {
    setWidgets(widgets.map(widget =>
      widget.id === id ? { ...widget, [field]: value } : widget
    ));
  };

  return (
    <div
      style={style}
      className={`border-2 p-4 pt-0 shadow-xl  touch-none duration-700 rounded bg-slate-400 w-[100%] mx-auto hover:shadow-green-600`} >
      <div
        className="cursor-grab py-4"
        ref={setNodeRef}
        {...attributes}
        {...listeners}>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={toggleMinimize}>{isMinimized ? 'Maximize' : 'Minimize'}</button>
      {
        <>
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={widget.name}
              onChange={(e) => onchangeInputWidget(widget.id, 'name', e.target.value)}
            />
          </div>
          <div>
            <label>Department: </label>
            <input
              type="text"
              value={widget.department}
              onChange={(e) => onchangeInputWidget(widget.id, 'department', e.target.value)}
            />
          </div>
        </>
      }
    </div>
  )
}
export default StudentAddWidget