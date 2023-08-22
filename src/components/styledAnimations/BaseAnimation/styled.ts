import styled from 'styled-components'

interface BaseAnimationProps {
  duration: string,
  timingfunction: string,
  delay: string,
  iterationcount: string,
  direction: string,
  fillmode: string,
  playstate: string,
  display: string,
  children: Element
}

const BaseAnimation = styled.div<BaseAnimationProps>`
  animation-duration: ${props => props.duration};  
  animation-timing-function: ${props => props.timingfunction};      
  animation-delay: ${props => props.delay};  
  animation-iteration-count: ${props => props.iterationcount};  
  animation-direction: ${props => props.direction}; 
  animation-fill-mode: ${props => props.fillmode};  
  animation-play-state:  ${props => props.playstate}; 
  display: ${props => props.display};
`;

BaseAnimation.defaultProps = {  
  duration: '1s',
  timingfunction: 'ease',
  delay: '0s',
  iterationcount: '1',
  direction: 'normal',
  fillmode: 'both',
  playstate: 'running',
  display: 'block'
};

export default BaseAnimation