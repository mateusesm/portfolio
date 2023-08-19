import { Footer } from "./styled"

export const FooterApp = () => {
  const generateDate = (): number => {
    const data = new Date()
    return data.getFullYear()
  }
  return (
    <Footer>
      &copy; Feito com React & Styled-components por Mateus Macedo | Alguns direitos reservados | {generateDate()}
    </Footer>
  )
}