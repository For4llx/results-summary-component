import styled, { css, keyframes } from "styled-components"

const fadeIn = keyframes`
    from
    {
        transform: translateX(4rem);
        opacity: 0;
    }
    to
    {
        transform: translateX(0rem);
        opacity: 1;
    }
`

interface PropInterface {
    animartionLength: string
    animartionDelay?: string
}

const animation = (props: PropInterface) =>
    css`
   ${fadeIn} ${props.animartionLength} ease-out ${props.animartionDelay};
`

interface animation {
    animartionLength: string
    animartionDelay?: string
}

const FadeIn = styled.div<animation>`
    opacity: 0;
    animation: ${(props) => animation(props)};
    animation-fill-mode: forwards;
`

export default FadeIn
