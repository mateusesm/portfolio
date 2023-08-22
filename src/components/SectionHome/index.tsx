import { Section } from "./styled"
import Typewriter from "../styledAnimations/Typewriter/styled"
import Blink from "../styledAnimations/Blink/styled"

type AvatarURL = {
  avatar_url: string
}

export const SectionHome = ({ avatar_url }: AvatarURL) => {
  return (
    <Section className="section-home">
      <div className="title">
        <h1>
          <Typewriter duration="3s" timingfunction="steps(13)" iterationcount="infinite">
            <Blink duration="900ms" timingfunction="steps(13)" iterationcount="infinite">
              Mateus Macedo
            </Blink>
          </Typewriter>
        </h1>

        <p>Desenvolvedor Full-stack com foco em tecnologias <span className="javascript">JavaScript</span> para <span className="backend">back-end</span> & <span className="frontend">front-end</span></p>
      </div>
      <aside className="right">
        <img src={avatar_url} alt="Foto Mateus" />
      </aside>
    </Section>
  )
}