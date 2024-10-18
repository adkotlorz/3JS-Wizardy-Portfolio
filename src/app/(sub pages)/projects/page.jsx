import Image from "next/image";

import bg from "../../../../public/background/projects-background.png";
import ProjectsList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background"
        className="-z-50 fixed w-full h-full top-0 left-0 object-cover object-center opacity-25"
      />
      <ProjectsList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-16 lg:top-20 lg:-left-24 left-1/2 -translate-x-1/2 lg:translate-x-0 -z-10 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
