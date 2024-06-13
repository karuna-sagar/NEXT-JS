import RecipeDetailItem from "@/components/recipe-details";

async function fetchDetail(recipeId) {
    try {
        const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`)
        const data = await response.json()
        return data;
    }
    catch (err) {
        throw new Error(err)
    }
}
export default async function recipeDetail({ params }) {
    const recipe = await fetchDetail(params?.details)
    return (
        <div> <RecipeDetailItem recipe={recipe} key={recipe.id} /> </div>
    )
}