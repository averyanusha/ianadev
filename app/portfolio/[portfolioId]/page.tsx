import { portfolioProject } from "@/components/data/portfolioProjects";

export default async function PortfolioPage({params} : {params: Promise<{ portfolioId: string }>}) {
  const { portfolioId } = await params;
  const project = portfolioProject.find(p => p.id === Number(portfolioId));
  if (!project) {
    return (
      <p className="">Not found</p>
    )
  }
  return (
    <div className="section">
      <h2 className="section-title">{project.title}</h2>
      <div className="">
        <img src={project.image} alt="" />
      </div>
      <div className="">
        <p className="">
          {project.client}
          <span>{project.year}</span>
        </p>
        <p>{project.description}</p>
      </div>
    </div>
  )
}