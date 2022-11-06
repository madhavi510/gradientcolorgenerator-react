// Style your elements here
import styled from 'styled-components'

export const GradientGenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientColor});
  background-size: cover;
  min-height: 100vh;
`
export const GradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-size: 20px;
  font-family: 'roboto';
  color: #ffffff;
`
export const TextNote = styled.p`
  font-size: 20px;
  font-family: 'roboto';
  color: #ededed;
`

export const DirectionsList = styled.ul`
  display: flex;
  flex-direction: row;
`
export const TextContent = styled.p`
  font-size: 20px;
  font-family: 'roboto';
  color: #ffffff79;
`
export const GradientInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const GradientInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const GradientText = styled.p`
  font-size: 20px;
  color: #ffffff;
  margin: 10px;
`

export const Input = styled.input`
  margin-bottom: 30px;
`

export const GenerateButton = styled.button`
  height: 40px;
  width: 90px;
  color: #1e293b;
  background-color: #00c9b7;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  font-size: 15px;
  font-weight: 600;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
