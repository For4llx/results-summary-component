import Summary from '../summaryList/SummaryList'
import Result from '../result/Result'
import ResultsSummaryContainer from './ResultsSummaryContainer'
import { fetchScores } from './ResultSummaryAPI'
import { useQuery } from 'react-query'
import { useState } from 'react'
import SummaryList from '../summaryList/SummaryList'

interface IScore {
    id: number
    category: string
    score: number
    icon: string
}

function ResultsSummary() {
    const [scores, SetScores] = useState<IScore[]>([])

    useQuery({
        queryFn: fetchScores,
        onSuccess: (dataScores: IScore[]) => SetScores(dataScores)
    })

    return (
        <ResultsSummaryContainer>
            <Result scores={scores} />
            <SummaryList scores={scores} />
        </ResultsSummaryContainer>
    )
}

export default ResultsSummary
