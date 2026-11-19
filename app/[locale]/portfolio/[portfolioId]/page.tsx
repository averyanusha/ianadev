import { portfolioProject } from "@/components/data/portfolioProjects";
import { useTranslations } from "next-intl";
import style from '../../../../components/Portfolio.module.css'
import { use } from "react";

export default function PortfolioPage({params} : {params: Promise<{ portfolioId: string }>}) {
  const { portfolioId } = use(params);
  const t = useTranslations('portfolio');
  const project = portfolioProject.find((project) => project.id === portfolioId);
  if (!project)
    return;
  return (
    <div className={`container ${style.portfolio}`}>
      <div className={style.portfolioText}>
        <h2 className="section-title">{t(`projects.${portfolioId}.title`)}</h2>
        <p className="">
          {project.client}
          <span>{project.year}</span>
        </p>
        <p>{t(`projects.${portfolioId}.description`)}</p>
      </div>
      <div className={style.portfolioImage}>
        <img src={project.image} alt={t(`projects.${portfolioId}.title`)} />
      </div>
    </div>
  )
}