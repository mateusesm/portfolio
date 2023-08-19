import { Section } from "./styled"

type AvatarURL = {
  avatar_url: string
}

export const SectionHome = ({ avatar_url }: AvatarURL) => {
  return (
    <Section className="section-home">
      <div className="title">
        <h1>Mateus Macedo</h1>
      </div>
      <aside className="right">
        <img src={avatar_url} alt="Foto Mateus" />
      </aside>
    </Section>
  )
}