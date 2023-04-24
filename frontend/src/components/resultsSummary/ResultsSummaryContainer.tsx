import styled from 'styled-components'

export default styled.section`
    display: flex;
    background-color: white;
    width: fit-content;
    border-radius: 32px;
    box-shadow: 0px 30px 60px hsl(224, 82%, 58%, 15%);

    @media screen and (max-width: ${props => props.theme.layout.mobile}) {
        flex-direction: column;
    }
`
