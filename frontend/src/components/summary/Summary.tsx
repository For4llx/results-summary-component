import FadeIn from "../animation/FadeIn"
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
            <FadeIn
                animartionLength="400ms"
                animartionDelay='4200ms'
            >
                <SummaryHeading>Summary</SummaryHeading>
            </FadeIn>
            <CategoryList
                scores={scores}
            />
            <FadeIn
                animartionLength="400ms"
                animartionDelay='6000ms'
            >
                <AppButton>Continue</AppButton>
            </FadeIn>
        </SummaryContainer>
    )
}

export default Summary
