// Write your code here
import {GradientDirectionContainer, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {DirectionDetails, clickGradientDirection, isActive} = props
  const {displayText, value} = DirectionDetails

  const getDirection = () => {
    clickGradientDirection(value)
  }

  return (
    <GradientDirectionContainer>
      <DirectionButton onClick={getDirection} isActive={isActive}>
        {displayText}
      </DirectionButton>
    </GradientDirectionContainer>
  )
}

export default GradientDirectionItem
