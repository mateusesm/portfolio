import { Section } from "./styled"

import { TimeLine } from "../TimeLine"

export type AvatarURL = {
  avatar_url: string
}

export const SectionAbout = ({ avatar_url }: AvatarURL) => {
  return (
    <Section className="section-about">
      <div className="container-about">
        <div className="image-left">
          <img src={avatar_url} alt="Foto Mateus" />
        </div>
        <aside className="text-right">
          <h2>Sobre mim</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente soluta, odit velit esse minima, eaque ipsam repellat ea ad aspernatur eveniet neque quidem. Accusamus quidem id illo qui dolores facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </aside>
      </div>
      <div className="container-travel">
        <h3>Um pouco da minha trajetória</h3>
        <TimeLine />
      </div>
    </Section>
  )
}