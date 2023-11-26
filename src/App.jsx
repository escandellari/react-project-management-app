import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectPage from "./components/ProjectPage";

import { useRef, useState } from "react";

const PROJECT_DATA = {
  title: "",
  description: "",
  dueDate: "",
};

function App() {
  const [projects, setProjects] = useState([]);
  const [showAddProject, setShowAddProject] = useState(false);

  const [projectTitle, setProjectTitle] = useState();
  const [projectDescription, setProjectDescription] = useState();
  const [projectDueDate, setProjectDueDate] = useState();

  const dialog = useRef();

  // if (showAddProject) {
  //   dialog.current.open();
  // }
  function handleChangeValue(inputIdentifier, value) {
    switch (inputIdentifier) {
      case "title":
        setProjectTitle(value);
      case "description":
        setProjectDescription(value);
      case "dueDate":
        setProjectDueDate(value);
    }
  }

  function handleAddProject() {
    setShowAddProject(true);
  }

  function handleCancelProject() {
    console.log("handleCancelProject");
    setShowAddProject(false);
  }

  function handleSaveProject() {
    console.log("projects:", projects);
    console.log("title:", projectTitle);
    console.log("descr:", projectDescription);
    console.log("dueDate:", projectDueDate);

    let oldArray = [];
    if (projects.length > 1) {
      oldArray = { ...projects };
    }

    const newElement = {
      title: projectTitle,
      description: projectDescription,
      dueDate: projectDueDate,
    };
    oldArray.push(newElement);

    console.log("oldArray:", oldArray);
    setProjects(oldArray);
    // setProjects((prevProject) => {
    //   return {
    //     ...prevProject,
    //     oldArray,
    //   };
    // });

    // console.log("Save button pressed", props);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar projects={projects} onAddProject={handleAddProject} />
      {showAddProject ? (
        <NewProject
          onSaveProject={handleSaveProject}
          onCancelProject={handleCancelProject}
          onChangeValue={handleChangeValue}
        />
      ) : (
        <NoProjectSelected onShowProject={handleAddProject} />
      )}
      {/* <ProjectPage title="Test" description="description" dueDate="today" /> */}
    </main>
  );
}

export default App;
