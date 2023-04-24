import styled from 'styled-components'

interface ISummaryTheme {
    red?: boolean
    orange?: boolean
    green?: boolean
    blue?: boolean
}

export default styled.p<ISummaryTheme>`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`