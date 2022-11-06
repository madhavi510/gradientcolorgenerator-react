// Style your elements here
import styled from 'styled-components'

export const GradientDirectionContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`
export const DirectionButton = styled.button`
  font-size: 20px;
    height: 40px;
    border-radius:10px;
    border:none;
    cursor: pointer;
  width: 120px;
  margin-left:10px;
  margin-right:10px;
  padding: 10px;
  font-family:"roboto;
  color:${props => (props.isActive ? '#ffffff79' : '#ededed')}
 opacity: ${props => (props.isActive ? 1 : 0.5)};
  `
