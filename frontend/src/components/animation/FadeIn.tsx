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
}

const animation = (props: PropInterface) =>
    css`
   ${fadeIn} ${props.animartionLength} ease-out;
`

interface sss {
    animartionLength: string
}

const FadeIn = styled.div<sss>`
    animation: ${(props) => animation(props)};
`

export default FadeIn
