import DetailsProject from '@/components/Projects/DetailsProject/DetailsProject'

interface ProjectDetailsProps {
  params: { projectId: string }
}

export default async function ProjectDetails({ params }: ProjectDetailsProps) {
  const projectId = params.projectId;

  return <DetailsProject project={projectId} />
}
