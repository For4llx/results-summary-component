import CategoryContainer from './CategoryContainer'
import CategoryName from './CategoryName'
import CategoryIcon from './CategoryIcon'
import CategoryResult from './CategoryResult'
import CategoryScore from './CategoryScore'

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

function Category({ score, color }: ISummaryList) {
    return (
        <CategoryContainer color={color}>
            <CategoryName>
                <CategoryIcon
                    src={score.icon}
                    alt={score.category}
                />
                {score.category}
            </CategoryName>
            <CategoryResult>
                <CategoryScore>{score.score}</CategoryScore> / 100
            </CategoryResult>
        </CategoryContainer>
    )
}

export default Category
