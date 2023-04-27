import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import sum from '../../utils/sum'
import FadeIn from '../animation/FadeIn'

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
  transition: transform 400ms;
  &:hover {
    transform: scale(1.15);
    }
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
  const [score, setScore] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [intervalState, setIntervalState] = useState<any>()

  useEffect(() => {
    const results = scores.map((score) => score.score)
    const sumScore = sum(...results)
    setTotalScore(Math.round(sumScore / 4))
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setScore(score => score + 1);
      setIntervalState(interval)
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (score >= totalScore) {
    clearInterval(intervalState)
  }

  return (
    <ResultContainer>
      <FadeIn
        animartionLength="400ms"
        animartionDelay='4200ms'
      >
        <ResultHeading>
          Your Result
        </ResultHeading>
      </FadeIn>
      <Score>
        <FadeIn
          animartionLength='400ms'>
          <ResultScore>
            {score}
          </ResultScore>
        </FadeIn>
        <AppParagraph>of 100</AppParagraph>
      </Score>
      <ResultsContent>
        <FadeIn
          animartionLength="400ms"
          animartionDelay='4300ms'
        >
          <ResultContentHeading>
            Great
          </ResultContentHeading>
        </FadeIn>
        <FadeIn
          animartionLength="400ms"
          animartionDelay='4500ms'
        >
          <AppParagraph>
            Your performance exceed 65% of the people conducting the test here!
          </AppParagraph>
        </FadeIn>

      </ResultsContent>
    </ResultContainer>
  )
}

export default Result
