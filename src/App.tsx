import { Box } from "@material-ui/core"
import { Features } from "./components/Features"
import { Footer } from "./components/Footer"
import { FrequentlyQuestions } from "./components/FrequentlyQuestions"
import { HeroBanner } from "./components/HeroBanner"
import { NavBar } from "./components/NavBar"
import { SectionDownload } from "./components/SectionDownload"



function App() {

  return (
    <Box className=" flex flex-col">
      <NavBar />
      <HeroBanner />
      <Features />
      <SectionDownload />
      <FrequentlyQuestions />
      <Footer />


    </Box>
  )
}

export default App
