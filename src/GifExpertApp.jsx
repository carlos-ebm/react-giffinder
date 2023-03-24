import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        //console.log(newCategory);
        // Valorant
        setCategories([newCategory, ...categories]);
        //let categories2 = [...categories, 'Valorant'];
        //setCategories(categories2);
        //setCategories([...categories, inputValue]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }
        </>
    )
}