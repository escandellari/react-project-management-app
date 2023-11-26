import Input from "./Input";

export default function NewProject({
  onSaveProject,
  onCancelProject,
  onChangeValue,
}) {
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
            onClick={onSaveProject}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input
          label="Title"
          onChange={(event) => onChangeValue("title", event.target.value)}
        />
        <Input
          isTextArea
          label="Description"
          onChange={(event) => onChangeValue("description", event.target.value)}
        />
        <Input
          label="Due Date"
          onChange={(event) => onChangeValue("dueDate", event.target.value)}
          type="date"
        />
      </div>
    </div>
    // <dialog
    //   ref={createProjectRef}
    //   // className="mt-24 text-center w-1/3"
    //   className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    // >
    //   {/* <form method="dialog" className="mt-4 text-right">
    //   </form> */}
    //   <button
    //     onClick={dontSubmit}
    //     className="text-stone-800 hover:text-stone-950"
    //   >
    //     Cancel
    //   </button>
    //   <button
    //     onClick={() =>
    //       onSaveProject(
    //         projectTitle.current.value,
    //         projectDescription.current.value,
    //         projectDueDate.current.value
    //       )
    //     }
    //     className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
    //   >
    //     Save
    //   </button>
    // </dialog>
    // <div className="mt-24 text-center w-2/3">
    // </div>
  );
}
