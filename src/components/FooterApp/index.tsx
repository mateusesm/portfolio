import { Footer } from "./styled"

export const FooterApp = () => {
  const generateDate = (): number => {
    return new Date().getFullYear()
  }
  return (
    <Footer className="footer">
      &copy; Feito com React & Styled-components por Mateus Macedo | Alguns direitos reservados | {generateDate()}
    </Footer>
  )
}