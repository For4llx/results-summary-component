import styled from 'styled-components'
import sum from '../../utils/sum'

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
  background: linear-gradient(hsla(252, 100%, 63%, 100%), hsla(241, 81%, 54%, 100%));
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
  background: linear-gradient(hsla(256, 71%, 46%, 100%), hsla(241, 71%, 46%, 0));

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
interface IScore {
  id: number
  category: string
  score: number
  icon: string
}

interface IResult {
  scores: Array<IScore>
}

function Result({ scores }: IResult) {
  const results = scores.map((score) => score.score)
  const sumScore = sum(...results)
  const resultTotal = Math.round(sumScore / 4)

  return (
    <ResultContainer>
      <ResultHeading>
        Your Result
      </ResultHeading>
      <Score>
        <ResultScore>
          {resultTotal}
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
