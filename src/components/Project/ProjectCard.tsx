"use client";

import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { ButtonLink as ButtonLinkType } from "@/interfaces/link";
import { useId } from "react";
import { useTranslation } from "next-i18next";
import { ProjectProps } from "@/components/Project/project.types";

const ProjectCard = (project: ProjectProps) => {
  const id = useId();
  const { t } = useTranslation(["common"]);
  const cta: ButtonLinkType = {
    label: t("common:SeeProjectLink"),
    href: project.url,
    target: "_blank",
    level: "primary"
  }

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">
          {project.title}
        </h2>
        <div className="card-tags flex flex-wrap flex-row gap-y-1 gap-x-2">
          {project.tags && project.tags.map((tag, index) => (
            <div key={`${id}-${index}`} className="badge badge-sm badge-outline">
              {tag}
            </div>
          ))}
        </div>
        <p>{project.description}</p>
        <div className="card-actions justify-end">
          <ButtonLink cta={cta}/>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
