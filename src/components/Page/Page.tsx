import { PageProps } from '@/@types/page'

function Page({ children }: PageProps) {
  return (
    <div className="flex flex-col">
      <div>{children}</div>
    </div>
  )
}

export default Page
