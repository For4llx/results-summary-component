import SummaryContainer from './SummaryContainer'
import SummaryCategory from './SummaryCategory'
import SummaryIcon from './SummaryIcon'
import SummaryResult from './SummaryResult'
import SummaryScore from './SummaryScore'

interface IScore {
    id: number
    category: string
    score: number
    icon: string
}

interface ISummaryList {
    score: IScore
    color: string
}

function Summary({ score, color }: ISummaryList) {
    return (
        <SummaryContainer color={color}>
            <SummaryCategory>
                <SummaryIcon
                    src={score.icon}
                    alt={score.category}
                />
                {score.category}
            </SummaryCategory>
            <SummaryResult>
                <SummaryScore>{score.score}</SummaryScore> / 100
            </SummaryResult>
        </SummaryContainer>
    )
}

export default Summary
