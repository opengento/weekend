import { ProjectProps } from "@/components/Project/project.types";
import ProjectCard from "@/components/Project/ProjectCard";

interface ProjectListProps {
  projects: ProjectProps[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="flex flex-wrap flex-row md-flex-col gap-8 justify-center align-items">
      {projects.map((project, index) => (
        <ProjectCard
          title={project.title}
          description={project.description}
          tags={project.tags}
          url={project.url}
        />
      ))}
    </div>
  );
}

export default ProjectList;
