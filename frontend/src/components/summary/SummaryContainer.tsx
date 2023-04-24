import styled from 'styled-components'

interface ISummaryTheme {
    red?: boolean
    orange?: boolean
    green?: boolean
    blue?: boolean
}

export default styled.article<ISummaryTheme>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 12px;
    background-color: ${props => props.red ? "hsl(0, 100%, 67%, 5%)" : props.orange ? "hsl(39, 100%, 56%, 5%)" : props.green ? "hsl(166, 100%, 37%, 5%)" : props.blue ? "hsl(234, 85%, 45%, 5%)" : null};
    font-size: ${props => props.theme.typography.fontSize.body};
    color: ${props => props.red ? props.theme.colors.primary.lightRed : props.orange ? props.theme.colors.primary.orangeyYellow : props.green ? props.theme.colors.primary.greenTeal : props.blue ? props.theme.colors.primary.cobaltBlue : null};
`