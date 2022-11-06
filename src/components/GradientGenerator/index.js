/* eslint-disable import/named */
import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGenContainer,
  GradientContainer,
  Heading,
  DirectionsList,
  TextNote,
  TextContent,
  GradientInputContainer,
  GradientInput,
  GradientText,
  Input,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    firstColorInput: '#8ae323',

    secondColorInput: '#014f7b',
    initialGradientDirection: gradientDirectionsList[0].value,
    gradientColor: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onFirstColorChange = event => {
    this.setState({firstColorInput: event.target.value})
  }

  onSecondColorChange = event => {
    this.setState({secondColorInput: event.target.value})
  }

  onClickColors = () => {
    const {
      firstColorInput,
      secondColorInput,
      initialGradientDirection,
    } = this.state
    this.setState({
      gradientColor: `to ${initialGradientDirection},${firstColorInput},${secondColorInput}`,
    })
  }

  clickGradientDirection = direction => {
    this.setState({initialGradientDirection: direction})
  }

  render() {
    const {
      firstColorInput,
      secondColorInput,
      initialGradientDirection,
      gradientColor,
    } = this.state
    return (
      <GradientGenContainer
        gradientColor={gradientColor}
        data-testid="gradientGenerator"
      >
        <GradientContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <TextNote>Choose Direction</TextNote>
        </GradientContainer>
        <DirectionsList>
          {gradientDirectionsList.map(event => (
            <GradientDirectionItem
              key={event.directionId}
              clickGradientDirection={this.clickGradientDirection}
              DirectionDetails={event}
              isActive={initialGradientDirection === event.value}
            />
          ))}
        </DirectionsList>
        <TextContent>Pick the Colors</TextContent>
        <GradientInputContainer>
          <GradientInput>
            <GradientText>{firstColorInput} </GradientText>
            <Input
              type="color"
              value={firstColorInput}
              onChange={this.onFirstColorChange}
            />
          </GradientInput>
          <GradientInput>
            <GradientText>{secondColorInput} </GradientText>
            <Input
              type="color"
              value={secondColorInput}
              onChange={this.onSecondColorChange}
            />
          </GradientInput>
        </GradientInputContainer>
        <GenerateButton type="button" onClick={this.onClickColors}>
          Generate
        </GenerateButton>
      </GradientGenContainer>
    )
  }
}
export default GradientGenerator
