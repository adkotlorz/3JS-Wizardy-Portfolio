"use client";

import ProjectLayout from "./ProjectLayout";

import { delay, motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const ProjectsList = ({ projects }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {projects.map((project, index) => {
        return <ProjectLayout key={index} {...project} />;
      })}
    </motion.div>
  );
};

export default ProjectsList;
