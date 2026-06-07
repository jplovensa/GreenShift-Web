import Preloader from './sections/Preloader'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Philosophy from './sections/Philosophy'
import DesignStudio from './sections/DesignStudio'
import Ecosystem from './sections/Ecosystem'
import Tiers from './sections/Tiers'
import Timeline from './sections/Timeline'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <DesignStudio />
        <Ecosystem />
        <Tiers />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
