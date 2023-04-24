export const fetchScores = async () => {
    const response = await fetch("http://127.0.0.1:8000/scores/")
    return response.json()
}