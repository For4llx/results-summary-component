import AppButton from "../app/AppButton"
import CategoryList from "../categoryList/CategoryList"
import SummaryContainer from "./SummaryContainer"
import SummaryHeading from "./SummaryHeading"

interface IScore {
    id: number
    category: string
    score: number
    icon: string
}

interface ISummary {
    scores: Array<IScore>
}

function Summary({ scores }: ISummary) {

    return (
        <SummaryContainer>
            <SummaryHeading>Summary</SummaryHeading>
            <CategoryList
                scores={scores}
            />
            <AppButton>Continue</AppButton>
        </SummaryContainer>
    )
}

export default Summary
