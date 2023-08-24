import { Section } from "./styled"

type AvatarURL = {
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
        <div className="container-time-line">
          <div className="container-years">
            <div>2018</div>
            <div>2019</div>
            <div>2020</div>
            <div>2021</div>
            <div>2022</div>
            <div>2023</div>
            <div>2024</div>
          </div>
          <div className="time-line">
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
          </div>
          <div className="cards-time-line">
            <div className="card">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="card">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="card">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}