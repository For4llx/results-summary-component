import styled from 'styled-components'
import Summary from '../summaryList/SummaryList'
import Result from '../result/Result'
import ResultsSummaryContainer from './ResultsSummaryContainer'

function ResultsSummary() {
    return (
        <ResultsSummaryContainer>
            <Result />
            <Summary />
        </ResultsSummaryContainer>
    )
}

export default ResultsSummary
