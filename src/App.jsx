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
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((previousState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...previousState,
        selectedProjectId: undefined,
        projects: [...previousState.projects, newProject],
      };
    });
  }

  function handleCancelProject() {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: undefined,
      };
    });
  }

  // function handleSaveProject() {
  //   console.log("projects:", projects);
  //   console.log("title:", projectTitle);
  //   console.log("descr:", projectDescription);
  //   console.log("dueDate:", projectDueDate);

  //   let oldArray = [];
  //   if (projects.length > 1) {
  //     oldArray = { ...projects };
  //   }

  //   const newElement = {
  //     title: projectTitle,
  //     description: projectDescription,
  //     dueDate: projectDueDate,
  //   };
  //   oldArray.push(newElement);

  //   console.log("oldArray:", oldArray);
  //   setProjects(oldArray);
  //   // setProjects((prevProject) => {
  //   //   return {
  //   //     ...prevProject,
  //   //     oldArray,
  //   //   };
  //   // });

  //   // console.log("Save button pressed", props);
  // }

  console.log(projectsState);

  let content;
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onSaveProject={handleAddProject}
        onCancelProject={handleCancelProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        projects={projectsState.projects}
        onAddProject={handleStartAddProject}
      />
      {content}
      {/* <ProjectPage title="Test" description="description" dueDate="today" /> */}
    </main>
  );
}

export default App;
