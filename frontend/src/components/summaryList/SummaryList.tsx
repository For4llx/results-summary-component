import SummaryThemeContainer from './SummaryThemeContainer'
import SummaryThemeHeading from './SummaryThemeHeading'
import AppButton from '../app/AppButton'
import { fetchScores } from './SummaryAPI'
import { useQuery } from "react-query"
import { useState } from 'react'
import Summary from '../summary/Summary'
import SummaryListContainer from './SummaryListContainer'
import SummaryListItem from './SummaryListItem'

interface IScore {
  id: number
  category: string
  score: number
  icon: string
}

function SummaryList() {
  const [scores, SetScores] = useState<IScore[]>([])

  useQuery({
    queryFn: fetchScores,
    onSuccess: (dataScores: IScore[]) => SetScores(dataScores)
  })

  const listCategories = scores.map((score) => (
    <SummaryListItem key={score.id}>
      <Summary
        score={score}
      />
    </SummaryListItem>
  ))

  return (
    <SummaryThemeContainer>
      <SummaryThemeHeading>Summary</SummaryThemeHeading>
      <SummaryListContainer>
        {listCategories}
      </SummaryListContainer>
      <AppButton>Continue</AppButton>
    </SummaryThemeContainer>
  )
}

export default SummaryList
