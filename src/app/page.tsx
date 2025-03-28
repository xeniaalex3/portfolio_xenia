import Home from '@/components/Home/Home'
import Page from '@/components/Page/Page'
import About from '@/components/About/About'
import Skills from '@/components/Skills/Skills'
import Projects from '@/components/Projects/Projects'
import Contact from '@/components/Contact/Contact'

export default function HomePage() {
  return (
    <Page>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Page>
  )
}
