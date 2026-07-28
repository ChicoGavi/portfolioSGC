import Header from "./componentes/Header.jsx";
import Hero from "./componentes/Hero.jsx";
import {Aboutme} from "./componentes/Aboutme.jsx";
import {Projects} from "./componentes/Projects.jsx";
import Experience from "./componentes/Experience.jsx";
import {Education} from "./componentes/Education.jsx";
import {Skills} from "./componentes/Skills.jsx";
import {Certs} from "./componentes/Certs.jsx";
import {Contact} from "./componentes/Contact.jsx";
import {useNavSearch} from "./hooks/useNavSearch.js";
import estudios from "./utils/estudios.js";
import skills from "./utils/skills.js";
import experience from "./utils/experience.js";
import certification from "./utils/certifications.js";



function App() {
    const { addRefs, scrollCallback } = useNavSearch();

  return (
    <>
      <Header
          callBack={ scrollCallback }
      />

      <Hero
          refHero={(nodeHTML) => addRefs('hero', nodeHTML)}
          callback={scrollCallback}
      />

      <Aboutme ref={(nodeHTML) => addRefs('about', nodeHTML)}/>
      <Projects refProject={(nodeHTML) => addRefs('projects', nodeHTML)} />
      <Experience
          refExperience={(nodeHTML) => addRefs('experience', nodeHTML)}
          experience={experience}
      />
      <Education
          refEducation={(nodeHTML) => addRefs('education', nodeHTML)}
          study={estudios}
      />
      <Skills
          refSkills={(nodeHTML) => addRefs('skills', nodeHTML)}
          skills={skills}
      />
      <Certs
          refCerts = {(nodeHTML) => addRefs('certs', nodeHTML)}
          certs = {certification}

      />
      <Contact refContact = {(nodeHTML) => addRefs('contact', nodeHTML)} />
    </>
  )
}

export default App
