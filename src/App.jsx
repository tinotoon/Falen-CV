import Biodata from "./assets/components/biodata"
import Education from "./assets/components/education"
import Header from "./assets/components/header"
import Objectives from "./assets/components/objectives"
import PhotoName from "./assets/components/photo-name"
import Work from "./assets/components/work"
import "./assets/css/style.css"
import "./assets/img/profile.jpg"


function App() {

return (
 <div>
  <Header />
  <div id="page">
    <PhotoName />
    <Objectives />
    <Education />
    <Work />
    <Biodata/>
  </div>
</div>
  )
}

export default App