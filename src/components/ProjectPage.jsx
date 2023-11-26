export default function ProjectPage({ title, description, dueDate }) {
  return (
    <>
      <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
      <button className="text-stone-600 hover:text-stone-950">Delete</button>
      <p className="mb-4 text-stone-400">{dueDate}</p>
      <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <p className="text-stone-800 my-4">...</p>
      <ul className="p-4 mt-8 rounded-md bg-stone-100">...</ul>
      <li className="flex justify-between my-4">...</li>
      <button className="text-stone-700 hover:text-red-500">Clear</button>
    </>
  );
}
