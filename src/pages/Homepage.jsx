import Headroom from "react-headroom"
import Navbar from "../components/Navbar"
import Parteners from "../components/HomeSections/Parteners"
import Hero from "../components/HomeSections/Hero"
import About from "../components/HomeSections/About"
import Exchanges from "../components/HomeSections/Exchanges"
import Ecosystem from "../components/HomeSections/Ecosystem"
import Vglob from "../components/HomeSections/Vglob"
import Roadmap from "../components/HomeSections/Roadmap"
import Tokenomics from "../components/HomeSections/Tokenomics"
import Howtobuy from "../components/HomeSections/Howtobuy"
import Contract from "../components/HomeSections/Contract"
import Audits from "../components/HomeSections/Audits"
import Faqs from "../components/HomeSections/Faqs"
import Blogs from "../components/HomeSections/Blogs"
import Footer from "../components/Footer"
import Team from "../components/HomeSections/Team"



const Homepage = () => {
  return (
    <>

      <Headroom   >
        <Navbar />
      </Headroom>

      <Hero />
      <Parteners />
      <About />
      <Exchanges />
      <Ecosystem />
      <Vglob />
      <Roadmap />
      <Tokenomics />
      <Howtobuy />
      <Contract />
      <Audits />
      <Team />
      <Faqs />
      <Blogs />
      <Footer />


    </>
  )
}

export default Homepage