import SummaryThemeContainer from './SummaryThemeContainer'
import SummaryThemeHeading from './SummaryThemeHeading'
import AppButton from '../app/AppButton'
import Summary from '../summary/Summary'
import SummaryListContainer from './SummaryListContainer'
import SummaryListItem from './SummaryListItem'

interface IScore {
  id: number
  category: string
  score: number
  icon: string
}

interface ISummaryList {
  scores: Array<IScore>
}

function SummaryList({ scores }: ISummaryList) {

  const listCategories = scores.map((score, index) => (
    <SummaryListItem key={score.id}>
      <Summary
        color={
          index % 4 === 0 ? "red" :
            index % 4 === 1 ? "orange" :
              index % 4 === 2 ? "green" :
                "blue"
        }
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
