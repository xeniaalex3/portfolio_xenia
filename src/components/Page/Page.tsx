import { PageProps } from '@/@types/page'
import Header from '@/components/Header/Header'
import Footer from '../Footer/Footer'

function Page({ children }: PageProps) {
  return (
    <div className="flex flex-col">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Page
