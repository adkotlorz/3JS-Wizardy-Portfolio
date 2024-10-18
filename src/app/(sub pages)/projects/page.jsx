import Image from "next/image";

import bg from "../../../../public/background/projects-background.png";
import ProjectsList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Staff";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background"
        fill
        className="-z-50 fixed w-full h-full object-cover object-center opacity-25"
      />
      <ProjectsList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-20 left-0 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
