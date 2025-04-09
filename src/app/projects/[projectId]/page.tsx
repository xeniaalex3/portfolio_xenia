import { Suspense } from 'react';
import DetailsProject from '@/components/Projects/DetailsProject/DetailsProject'
import { ProjectDetailsData } from '@/data/projects_data';

interface DetailPageProps {
  params: Promise<{
    projectId: string
  }>
}

export default async function ProjectDetails(props: DetailPageProps) {
  const { projectId } = await props.params

  const project = ProjectDetailsData.find(
    (project) => project.id === Number(projectId)
  );

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailsProject project={project}/>
      </Suspense>
  ) 
}
