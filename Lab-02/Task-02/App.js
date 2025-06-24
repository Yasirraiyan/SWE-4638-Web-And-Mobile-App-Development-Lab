import React from "react";
import NavComponent from "./components/NavComponent";
import HeroComponent from "./components/HeroComponent";
import ProjectComponent from "./components/ProjectComponent";
import WorkProgress from "./components/WorkProgress";
import BlockEntriesComponent from "./components/BlockEntriesComponent";
import FooterComponent from "./components/FooterComponent";

function App() 
{
  return (
    <div>
      <NavComponent />
      <HeroComponent />
      <ProjectComponent />
      <WorkProgress />
      <BlockEntriesComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
