import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectPage from "./components/ProjectPage";
import Modal from "./components/Modal";

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
      <Modal></Modal>
      {/* <ProjectPage title="Test" description="description" dueDate="today" /> */}
    </main>
  );
}

export default App;
