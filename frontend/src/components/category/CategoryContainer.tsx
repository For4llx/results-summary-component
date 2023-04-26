import styled from 'styled-components'

interface ISummaryTheme {
    color: string
}
export default styled.article<ISummaryTheme>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 12px;
    background-color: ${props => props.color === "red" ? "hsl(0, 100%, 67%, 5%)" : props.color === "orange" ? "hsl(39, 100%, 56%, 5%)" : props.color === "green" ? "hsl(166, 100%, 37%, 5%)" : props.color === "blue" ? "hsl(234, 85%, 45%, 5%)" : null};
    font-size: ${props => props.theme.typography.fontSize.body};
    color: ${props => props.color === "red" ? props.theme.colors.primary.lightRed : props.color === "orange" ? props.theme.colors.primary.orangeyYellow : props.color === "green" ? props.theme.colors.primary.greenTeal : props.color === "blue" ? props.theme.colors.primary.cobaltBlue : null};
`