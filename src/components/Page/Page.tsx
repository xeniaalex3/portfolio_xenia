import { PageProps } from '@/@types/page'
import Header from '@/components/Header/Header'

function Page({ children }: PageProps) {
  return (
    <div className="flex flex-col">
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default Page
