import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onSaveProject, onCancelProject }) {
  const projectTitle = useRef();
  const projectDesc = useRef();
  const projectDueDate = useRef();

  function handleSave() {
    const enteredTitle = projectTitle.current.value;
    const enteredDesc = projectDesc.current.value;
    const enteredDueDate = projectDueDate.current.value;

    // TODO validation

    onSaveProject({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={onCancelProject}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" ref={projectTitle} />
        <Input isTextArea label="Description" ref={projectDesc} />
        <Input label="Due Date" type="date" ref={projectDueDate} />
      </div>
    </div>
  );
}
