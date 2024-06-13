import RecipeList from "@/components/recipe-list";

async function fetchListOfRecipes() {
    try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        return data?.recipes
    }
    catch (e) {
        console.log(e);
    }
}

export default async function recipeList() {
    const recipeList = await fetchListOfRecipes();
    return <RecipeList recipeList={recipeList} />
}