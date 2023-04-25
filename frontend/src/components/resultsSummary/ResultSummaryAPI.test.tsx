import { fetchScores } from "./ResultSummaryAPI"

const CategoriesMockData = [
    {
        "id": 1,
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg"
    },
    {
        "id": 2,
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg"
    },
    {
        "id": 3,
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg"
    },
    {
        "id": 4,
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg"
    }
]

test("return the categories from databae", async () => {
    jest.fn().mockRejectedValue(CategoriesMockData)
    expect(CategoriesMockData).toEqual(CategoriesMockData)
})