interface ToggleParams {
  handleToggle: () => void,
  toggleRef: {
    current: HTMLButtonElement | null
  }
}

export const Toggle = ({ handleToggle, toggleRef }: ToggleParams) => {
    return (
        <div className='container-toggle'>
            <button onClick={handleToggle} ref={toggleRef} className="toggle">
                <div className='first'></div>
                <div className='second'></div>
                <div className='third'></div>
            </button>
        </div>
    )
}