import Category from '../category/Category'
import CategoryListContainer from './CategoryListContainer'
import CategoryListItem from './CategoryListItem'

interface IScore {
  id: number
  category: string
  score: number
  icon: string
}

interface ICategoryList {
  scores: Array<IScore>
}

function CategoryList({ scores }: ICategoryList) {

  const listCategories = scores.map((score, index) => (
    <CategoryListItem key={score.id}>
      <Category
        index={index}
        color={
          index % 4 === 0 ? "red" :
            index % 4 === 1 ? "orange" :
              index % 4 === 2 ? "green" :
                "blue"
        }
        score={score}
      />
    </CategoryListItem>
  ))

  return (
    <CategoryListContainer>
      {listCategories}
    </CategoryListContainer>
  )
}

export default CategoryList
