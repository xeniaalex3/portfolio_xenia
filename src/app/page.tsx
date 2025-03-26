import Home from '@/components/Home/Home'
import Page from '@/components/Page/Page'
import About from '@/components/About/About'
import Skills from '@/components/Skills/Skills'

export default function HomePage() {
  return (
    <Page>
      <Home />
      <About />
      <Skills />
    </Page>
  )
}
