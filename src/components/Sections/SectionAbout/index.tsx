import { Section } from "./styled"

type AvatarURL = {
  avatar_url: string
}

export const SectionAbout = ({ avatar_url }: AvatarURL) => {
  return (
    <Section>
      <h2>Section About</h2>
      <aside className="right">
        <img src={avatar_url} alt="Foto Mateus" />
      </aside>
    </Section>
  )
}