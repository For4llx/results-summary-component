import styled from 'styled-components'

const AppHeadingResult = styled.h1`
  margin-bottom: 2.188rem;
  color: ${props => props.theme.colors.neutral.lightLavender};
  font-size: ${props => props.theme.typography.fontSize.m};
`

const ResultHeading = styled.h1`
  margin-bottom: 2.188rem;
  color: ${props => props.theme.colors.neutral.lightLavender};
  font-size: ${props => props.theme.typography.fontSize.m};
`

const ResultContainer = styled.article`
  padding: 2.563rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 32px;
  background: linear-gradient(${props => props.theme.colors.gradients.lightSlateBlue}, ${props => props.theme.colors.gradients.lightRoyalBlue});
`
const Score = styled.div`
  margin-bottom: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 200px;
  height: 200px;
  background: linear-gradient(0.6turn, ${props => props.theme.colors.gradients.lightSlateBlue}, ${props => props.theme.colors.gradients.lightRoyalBlue});

`

const AppParagraph = styled.div`
  color: #CAC9FF;
`

const ResultsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.875rem;
  max-width: 260px;
`

const ResultScore = styled.h1`
  font-size: ${props => props.theme.typography.fontSize.xl};
  color: ${props => props.theme.colors.neutral.white};
`

const ResultContentHeading = styled.h1`
  font-size: ${props => props.theme.typography.fontSize.l};
  color: ${props => props.theme.colors.neutral.white};
`


function Result() {
  return (
    <ResultContainer>
      <ResultHeading>
        Your Result
      </ResultHeading>
      <Score>
        <ResultScore>
          76
        </ResultScore>
        <AppParagraph>of 100</AppParagraph>
      </Score>
      <ResultsContent>
        <ResultContentHeading>
          Great
        </ResultContentHeading>
        <AppParagraph>
          Your performance exceed 65% of the people conducting the test here!
        </AppParagraph>
      </ResultsContent>
    </ResultContainer>
  )
}

export default Result