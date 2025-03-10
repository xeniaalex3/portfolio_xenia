import { PageProps } from '@/@types/page'
import Header from '@/components/Header/Header'

function Page({ children }: PageProps) {
  return (
    <div className="max-h-screen h-screen !max-w-full">
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default Page
