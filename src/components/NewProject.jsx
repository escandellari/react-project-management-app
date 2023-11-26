import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onSaveProject, onCancelProject }) {
  const projectTitle = useRef();
  const projectDesc = useRef();
  const projectDueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = projectTitle.current.value;
    const enteredDesc = projectDesc.current.value;
    const enteredDueDate = projectDueDate.current.value;

    console.log(enteredTitle, enteredDesc, enteredDueDate);
    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onSaveProject({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          Oops.. looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
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
    </>
  );
}
