import { ToggleContainer } from "./styled"

interface ToggleParams {
  handleToggle: () => void,
  toggleRef: {
    current: HTMLButtonElement
  }
}

export const ToggleButton = ({ handleToggle, toggleRef }: ToggleParams) => {
    return (
      <ToggleContainer className='container-toggle'>
          <button onClick={handleToggle} ref={toggleRef} className="toggle">
              <div className='first'></div>
              <div className='second'></div>
              <div className='third'></div>
          </button>
      </ToggleContainer>
    )
}