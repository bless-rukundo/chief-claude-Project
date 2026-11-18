import React from "react"

export default function Main1() {

    const [ingredients, setIngredients] = React.useState<string[]>([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        if (typeof newIngredient === "string") {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        }
    }

    return (
        <main className="flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit} className="add-ingredient-form flex justify-center">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button className="bg-black text-white rounded-xl p-4">Add ingredient</button>
            </form>
            <ul className="flex flex-col justify-center">
                {ingredientsListItems}
            </ul>
        </main>
    )
}