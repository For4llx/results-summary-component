import styled from 'styled-components'

export default styled.button`
cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 128px;
  background-color: #303B59;
  height: 56px;
  width: 288px;
  transition: all 5000ms;
  &:hover {
    background-image: linear-gradient(${props => props.theme.colors.gradients.lightSlateBlue}, ${props => props.theme.colors.gradients.lightRoyalBlue});
    font-weight: 800;
  }
`

