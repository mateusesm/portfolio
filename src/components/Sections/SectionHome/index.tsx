import { Section } from "./styled"
import Typewriter from "../../styledAnimations/Typewriter/styled"
import Blink from "../../styledAnimations/Blink/styled"

export const SectionHome = () => {
  return (
    <Section className="section-home">
      <div className="title">
        <h1>
          <Typewriter duration="3s" timingfunction="steps(14)">
            <Blink duration="900ms" timingfunction="steps(14)" iterationcount="infinite">
              Mateus Macedo.
            </Blink>
          </Typewriter>
        </h1>

        <p>Desenvolvedor Full-stack com foco em tecnologias <span className="javascript">JavaScript</span> para <span className="backend">back-end</span> & <span className="frontend">front-end</span></p>
      </div>
    </Section>
  )
}