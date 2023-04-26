import CategoryContainer from './CategoryContainer'
import CategoryName from './CategoryName'
import CategoryIcon from './CategoryIcon'
import CategoryResult from './CategoryResult'
import CategoryScore from './CategoryScore'
import FadeIn from '../animation/FadeIn'
import { useState } from 'react'

interface IScore {
    id: number
    category: string
    score: number
    icon: string
}

interface ISummaryList {
    score: IScore
    color: string
    index: number
}

function Category({ score, color, index }: ISummaryList) {
    return (
        <FadeIn animartionLength={(400 * index).toString() + "ms"}>
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
        </FadeIn>
    )
}

export default Category
